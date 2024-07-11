const { faker } = require('@faker-js/faker');

function generateWebsiteTraffic() {
    return faker.number.int({ min: 1000, max: 10000 });
  }
  
  function generateTopPages() {
    const pages = ['home', 'about', 'products', 'contact', 'blog'];
    const numPages = faker.number.int({ min: 1, max: pages.length });
  
    const topPages = [];
    for (let i = 0; i < numPages; i++) {
      topPages.push(faker.helpers.arrayElement(pages));
    }
  
    return topPages;
  }

module.exports = {
  generateWebsiteTraffic,
  generateTopPages,
};
