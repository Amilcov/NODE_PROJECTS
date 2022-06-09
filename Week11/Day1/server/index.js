const { fstat } = require('fs');
const http = require('http');
const {readFile} = require('fs').promises;
const {Item} = require('../models'); 

const server = http.createServer( async (req, res) => {

  if( req.method === 'GET' && req.url.startsWith('/images')) {
       const filePath = './assets' + req.url;
       let fileContent;
       try {
            fileContent = await readFile(filePath);
       } catch(err) {
           let msg = `Error on reading image, 
                     ${filePath} 
                     ${err}`;
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain'); 
            res.end(msg);
            return;
       }

       const idxExtension = filePath.lastIndexOf('.');
       const imageType = 'image/' + filePath.substring(idxExtension  + 1);

       res.statusCode = 200;
       res.setHeader('Content-Type', imageType);
       res.end(fileContent);
       return;

   } else if(req.method === 'GET' && req.url === '/items/new') {

       const filePath = './views/add-item.html';
       const fileContent = await readFile(filePath);
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/html');
       res.end(fileContent);
       return;

   } else if(req.method === 'POST' && req.url === '/items') {

     let bodyMsg = '';
     for await (chunck of req) {
         bodyMsg += chunck;
     }
     
      let objFormFields = bodyMsg.split('&')
      .map(keyValue => keyValue.split('='))
     .reduce((acc, elem) => { [key,value] = elem; valueDecode = decodeURIComponent(value).replace(/\+/g, ' '); acc[key] = valueDecode; return acc}, {});

   
       const item = await Item.build({
           name: objFormFields.name,
           description: objFormFields.description,
           imageName: '',
           amount: objFormFields.amount

       }) 
       await item.save();
       
       res.statusCode = 302;
       res.setHeader('location', '/');  
       res.end();
       return;
    } else if(req.method === 'POST' && /\/items\/\d+\/used/.test(req.url)){
        const id = req.url.split('/')[2];

        const item = await Item.findByPk(id);
        item.amount--;
        await item.save();
      
        res.statusCode = 302;
        res.setHeader('location', '/');
        res.end();
        return;

   } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');  
        res.write('<div><a href="/items/new">Add a new item</a></div>');
        const items = await Item.findAll({order: [['id']]});
        let msg = `There are ${items.length} items`;
        res.write(msg);

        msg = `<table>
                    <tr>
                       <th>No</th>
                       <th>Image</th>
                       <th>Name</th>
                       <th>Description</th>
                       <th>Amount</th>
                       <th>Need?</th>
                       <th>path</th>
                    </tr>`;
            
         for(let i = 0; i < items.length; i++)  {
           let name = items[i].name;
           let description = items[i].description;
           let amount = items[i].amount;
           let image = items[i].imageName || '';
           msg += `<tr>
                    <td>${i+1}</td>
                   ` 
            msg += image === '' ? `<td></td>` : `<td> <img alt="item picture" src="../images/${image}"></td>`
            msg += `<td>${name}</td>
                    <td>${description}</td>
                    <td>${amount}</td>`

            if (amount ===0) {
                 msg += `<td></td>`;
            } else {
                msg += `<td>
                            <form method='post' action='/items/${items[i].id}/used'>
                                 <button type="submit">Use one</button>
                            </form>
                </td>` 
            } 

            msg += `</tr>`;
         }
        msg += `</table>`;
        res.write(msg);
        return;
  }
})

const hostname = '127.0.0.1'
const port = 8081;
server.listen(port, hostname,  () => console.log('The server is running on port', port) );



