module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }
  
  return members.reduce((teamName, username) => {
    teamName += typeof username === 'string' ? username.trim()[0] : '';
    return teamName;
  }, '').toUpperCase().split('').sort().join('');
};
