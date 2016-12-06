var fs = require('fs');
var arr = proces.argv;
console.log(arr);
var marked = require('marked');
var renderer = new marked.Renderer();

var readme_md = arr[2];
    readme_md = fs.readFileSync(readme_md);
    readme_md = readme_md.toString();


renderer.heading = function(text, level){
  var escapedText = text.replace(/[^\w]+/g, '-');
  marked(readme_md, function(err, content){
    if (err) {
      console.log(content);
      throw err;
    }
    else{
      fs.writeFileSync(README.html, readme_md);
    }
  });
};
});



//
// fs.writeFileSync('README.html', readme_md, function(err){
//   if(err){
//     console.error(err.stack);
//   }
//   else{
//     console.log('success!!');
//   }
// });
