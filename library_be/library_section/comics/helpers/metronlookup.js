require('dotenv').config()


const ISBNLookup = async (isbn) => {
  const username = process.env.metronUsername;
  const password = process.env.metronPassword;
  const url = `${process.env.metronBaseUrl}/issue/?upc=${isbn}`
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    }
  });
  const data = await response.json();
  return {
    dataLength: data.results.length,
    data: data.results,
  };
};

const getComicByIssue = async (issueNumber) => {
  console.log('issue number', issueNumber);
  const username = process.env.metronUsername;
  const password = process.env.metronPassword;
  const url = `${process.env.metronBaseUrl}/issue/${issueNumber}/`
  console.log(url);
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    }
  });
  const data = await response.json();
  console.log('data', data);
  return data;
};


module.exports = { ISBNLookup, getComicByIssue };