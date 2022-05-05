// Write your import statements here if necessary

const getIndex = () => {
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
}

export {getIndex};

