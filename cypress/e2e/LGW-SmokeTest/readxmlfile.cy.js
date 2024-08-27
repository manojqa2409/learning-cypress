///<reference types="cypress"/>

describe('Read XML from Specific Directory', () => {
    it('should read and parse XML file', () => {

             
      const filePath = "C:\\Production\\Config\\plantConfig.xml"; // path relative to the project root
  
      cy.task('readXmlFile', filePath).then((result) => {
        console.log(result)

        if (!result || !result.items || !result.items.item) {
            throw new Error('XML structure is not as expected or missing key elements');
          }

        // Assuming the XML has a structure where there are multiple 'item' elements
        const itemsArray = result.items.item.map(item => ({
          //name: item.name[0],
          //value: item.value[0]
          id: item.id[0],
          name: item.name[0]

        }));
  
        // Log or inspect the array to verify its contents
        console.log(itemsArray);
  
        // Assertions or further operations with the parsed XML data
        expect(itemsArray).to.be.an('array');
      });
    });
  });
  