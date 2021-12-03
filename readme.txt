###################################
# Junior Developer technical test #
###################################

This test is designed to analyse your capabilities in HTML, CSS and Javascript. There is no specific requirement with regards to how you code this task - we would like to see you produce what you think is a good solution using the methods you see fit. What we are looking for is the ability to structure your code, making it easily readable and maintainable. Want to use jQuery? Fine. Go vanilla js with ES6? Cool. Think React would make your life easier? Go for it. We're looking to be able to get a sense of your methodology and approach from your results, and an understanding of your knowledge of the fundamentals. 

This test should take you around an hour to an hour and a half to complete; we've added a couple of extra stretch goals in there if you are super speedy or eager to show off :-). We don't expect you to spend hours on this if you are struggling to do the stretch goals because we are sure you have a life outside of interviews and coding tests. Code production speed has some importance, but we value clean, well-written code over number of lines produced. If you find you can meet most of the core requirements and do them very well, we would prefer that over finishing it all poorly.

#############
# Your task #
#############

Supplied in this folder are:
- Readme (this)
- JSON file with building data
- Building images (/assets)
- Page design (JPEG)
    - index_page_design.jpg
    - building_selected_1.jpg
    - building_selected_2.jpg (sidebar scrolled down further)

Some of our main clients are property/building developers whose business involves building large office buildings in London for lease. Their business is a mix of venture capital to get investors to invest in funding building works and leasing for generating income through leasing floors of offices. 

Your task is to build out a page containing a module where users can see a list of buildings available for lease. Users should be able to view a building's details by clicking on it, at which point they will get an overview panel displaying more detailed information about the building. A design file is supplied to give you guidance how to lay this out. You will be expected to faithfully reproduce the site paying attention to margins, padding, and font sizes. The CSS implementation method, however, is up to you.

You will be expected to display a good knowledge of interacting with page elements, traversing and rendering data, and handling events through Javascript. 

Your HTML is expected to be well structured and easy to read, balancing functionality with code legibility and SEO/Accessibility guidelines.

CORE REQUIREMENTS:

- You should be rendering the buildings out into the list of buildings from the building data.
- You should have an animated sidebar that swings in/out and displays the selected building data.
- All styling should be responsive and adjust to page sizing. Your solution should also be cross browser compatible (Chrome, Firefox, Safari, IE Edge. Don't worry about IE11). I will leave it to your judgement to adjust styling as you feel works best for tablet/mobile as this gives you a change to show your preferred approach to mobile styling/handling.
- The building details sidebar should show a table of floors, along with their space available and occupants

STRETCH GOALS:

- In the building details sidebar, show the current available total space by running a recursive function on the floor data. 
- Add a filter bar and allow the user to filter the buildings in the list by building type and/or status. On change, the list of buildings should update. 
- Interesting hover/focus animation of building list items, buttons etc.
