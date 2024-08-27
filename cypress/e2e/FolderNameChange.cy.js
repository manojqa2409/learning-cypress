describe('Folder rename', () => {
    it('should rename the folder of NKS', () => {
      const oldPath = 'C:\\Production\\1-NKS';
      const newPath = 'C:\\Production\\NKS';
  
      cy.task('renameFolder', { oldPath, newPath }).then(() => {
        cy.log('NKS Folder renamed successfully');
      });
    });

    it('should rename the folder of Lillby', () => {
      const oldPath = 'C:\\Production\\1-Lillby';
      const newPath = 'C:\\Production\\Lillby';
  
      cy.task('renameFolder', { oldPath, newPath }).then(() => {
        cy.log('Lillby Folder renamed successfully');
      });
    });

  });