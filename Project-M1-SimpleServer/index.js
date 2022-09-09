const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate');


/// Read data from file
const tempLoan = require('./data/data.json');

//Calculate the PV
function Calculate(amount, interest, years) {
    //const months = years*12
    const months = years * 12;
    //calculate i = interest/12
    const interests = interest / 12;
    //Calculate the PV
    const PV = Math.round((amount / (interests)) * (1 - (1 / ((1 + ((interests))) ** (months)))) * 100) / 100;
    return PV
}

//Add the PV into tempLoan
tempLoan.forEach(function (item) {
    item.PV = Calculate(item.loanAmount, item.interest, item.loanTermYears);
})

// Template
const tempCourse = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
 );

 /////////////////////////////////
// Template
const templateHTMLCourse = fs.readFileSync(
    `${__dirname}/template/templateCourse.html`,
    'utf-8'
  );

// //   function replaceTemplate(htmlStr, course){
// const replaceTemplate = (htmlStr, course)=>{ // fat arrow function or lambda
//     let output = htmlStr.replace(/{%NAME%}/g, course.courseName);
//     output = output.replace(/{%IMAGE%}/g, course.image);
//     output = output.replace(/{%FROM%}/g, course.from);
//     output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
//     output = output.replace(/{%CREDITS%}/g, course.credits);
//     output = output.replace(/{%DESCRIPTION%}/g, course.description);
//     output = output.replace(/{%ID%}/g, course.id);
//     return output;
// }

 const dataObj = tempLoan; // string to JavaScript Object JSON

////////////////////////////////
//Create Server
// const server = httpServer.createServer(function (req, res) {// call back function
const server = httpServer.createServer( (req, res) =>{// call back function

    // const urlParameter = url.parse(req.url, true);
    // console.log(JSON.stringify(urlParameter.query));// convert to String
    // console.log(JSON.stringify(urlParameter.pathname));// convert to String
    const {query,pathname} = url.parse(req.url, true); // object distructors
    if(query.id <=4){// if there is query parameter named id read as string
        // Courses page
        if (pathname === '/' || pathname.toLowerCase() === '/loan') {
            res.writeHead(200, {// Every thing ran successfully
                'Content-type': 'text/html'
            });
            const loan = dataObj[Number(query.id)];// convert string to numeric value
            //const strCourseName = JSON.stringify(loan);
            const loanHTML = replaceTemplate(templateHTMLLoan, loan);// function that will replace the course values in the HTML
            //   res.end(` We received our first request from the client at resource ${urlParameter.pathname.toLowerCase()} with query parameter ${urlParameter.query.id}
            //   ${JSON.stringify(course)}// convert object back to string
            //   `)
            res.end(loanHTML);
        }
    }
         
    else if (query.id >= 5) {
        res.writeHead(200, { // Server did not find what you were looking for
            'Content-type': 'text/html'
        });
        res.end(`Please enter an id that is <=4 and >=0`)
    }

    else{
            res.writeHead(404, {// Server did not find what you were looking for
                'Content-type': 'text/html'
            });
            res.end(`resource not found`)
        }
    });

//Start Listening to requests
server.listen(8000, 'localhost', ()=> {
    console.log('Listening to requests on port 8000');
});

