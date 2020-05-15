console.log(EMAIL_REGEX.test("glen.redden@service.nsw.gov.au")); // Outputs true
console.log(EMAIL_REGEX.test("glen.redden9")); // Outputs false
console.log(EMAIL_REGEX.test("Hello, my name is Glen Redden and my Email is: glen.redden@service.nsw.gov.au")); // Outputs true
console.log(URL_REGEX.test("https://learn.service.nsw.gov.au/")); // Outputs true
console.log(URL_REGEX.test("my website")); // Outputs false
console.log(URL_REGEX.test("Please visit Moodle for more information. You can find it at: https://learn.service.nsw.gov.au/")); // Outputs true  


const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;




