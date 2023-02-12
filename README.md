The project runs on port 5000.

scripts to run the project :

npm run format >> (to run prettier)
npm run lint >> (to run eslint)
npm run lint:fix >> (to lint and fixing)
npm run jasmine >> (to run the unit tets)
npm run build >> (to compile ts files )
npm run dev >> (to run the server by nodemon )
npm run start >> (to run the server by node)

you can go through the link : http://localhost:5000/api/images/
and you have to write ?width= your width &height = your height &filename = your image that needs to resize

example : http://localhost:5000/api/images/?width=400&height=400&filename=will

width and height should be positive Numbers

the Assets folder has two folders

images :
leonardo.jpg
sam.jpg
porta.jpg
will.jpg

thumb:
has the resized images that processed with deiminssions
