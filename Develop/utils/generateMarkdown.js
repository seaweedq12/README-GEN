// TODO: Create a function that returns a license badge based on which license is passed in
const mitLcns = {
  badge: 'https://img.shields.io/badge/License-MIT-red',
  link: 'https://opensource.org/licenses/MIT',
  section: `MIT License

Copyright (c) [year] [fullname]
  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
  
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
}
const apacLcns = {
  badge: 'https://img.shields.io/badge/License-Apache-red',
  link: 'https://opensource.org/licenses/Apache-2.0',
  section: `Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
}
const gplLcns = {
  badge: 'https://img.shields.io/badge/License-GPL-red',
  link: 'https://opensource.org/licenses/GPL-3.0',
  section: `Copyright (C) <year>  <name of author>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
}

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ''
  if (!license){
    return '';
  }else{
    switch(license){
      case 'MIT':
        badge = mitLcns.badge;
        break;
      case 'Apache':
        badge = apacLcns.badge;
        break;
      case 'GPL':
        badge = gplLcns.badge;
    }
    return badge ;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ''
  if (!license){
    return '';
  }else{
    switch(license){
      case 'MIT':
        link = mitLcns.link;
        break;
      case 'Apache':
        link = apacLcns.link;
        break;
      case 'GPL':
        link = gplLcns.link;
    }
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = ''
  if (!license){
    return '';
  }else{
    switch(license){
      case 'MIT':
        section = mitLcns.section;
        break;
      case 'Apache':
        section = apacLcns.section;
        break;
      case 'GPL':
        section = gplLcns.section;
    }
    return section ;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const link = renderLicenseLink(data.license)
  const section = renderLicenseSection(data.license)
  return `# ${data.title}
        
## Description
        
${data.description}
        
## Table of Contents 
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

${badge}
        
## Installation
        
${data.install}
        
## Usage
        
${data.usage}    
             
## License
        
${section}        

Link to license: ${link}       

## How to Contribute
        
${data.contribution}
        
## Tests
        
${data.test}

##Questions

Link to my to my Github profile: https://github.com/${data.username}
For any other information, contact me through: ${data.email} 
`;
}

module.exports = generateMarkdown;
