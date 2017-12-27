# namilabs_web

This is repo for website namilabs.	
Build using jekyll.	
For running locally, step by step in linux ubuntu :	

1. Open terminal.	
2. Check whether you have Ruby 2.1.0 or higher installed:	
	```
	$ ruby --version
	```	
3. Check whether you have Bundler:	
	```
	$ bundler -v
	```	
4. Clone this repo.	
5. Change local directory to root folder of your local repo.	
6. Initiate jekyll
	```
	$ jekyll build
	```	
7. Install bundler
	```
	$ bundler install
	```	
8. Run this command for build and generate your local jekyll :	
	```
	$ bundler exec jekyll serve
	```
9. Open browser and put link http://localhost:4000	
