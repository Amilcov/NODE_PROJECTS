// Write your import statements here if necessary


export const getIndex = () => {
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
}