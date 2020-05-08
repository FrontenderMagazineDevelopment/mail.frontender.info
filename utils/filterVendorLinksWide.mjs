export default (vendor)=>(links)=>links.filter((link) => !link.includes(vendor));
