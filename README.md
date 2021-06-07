## MEMEMANIA
### Meme stream Application

##### Mememania is a meme streaming application which allows the user to type in their details and the url of the meme image to be posted along with their innovative captions. The users can view the memes posted by them and also the previous memes that had been posted by other users too.

##### FLOWS

* Users will post Memes by providing these inputs:
    - Name of the person posting the meme
    - Caption for the Meme
    - URL of the Meme image

* Users will view the latest 100 memes posted (it can be on the same page or on a separate page).

    - If they post a new meme, that should also get listed. Note that these submitted memes will be shown one below the other.

    - Each meme should display the name of the meme maker, the caption for the meme and the image pulled from the meme URL.

##### PROCESS and REQUIREMENTS:
1. The backend shall be capable of receiving the posted meme inputs from the frontend and store them in a database.

2. The backend shall be capable of fetching the list of memes from the database and send them to the frontend.

3. The interaction between the frontend and backend shall be based on a REST API with support for the below 3 endpoints.

4. Endpoint to send a meme to the backend

        HTTP Method - POST

        Endpoint - /memes

        Json Body contains these inputs - name, url, caption

The backend should allocate a unique id for the meme and return it as a json response.

5. Endpoint to fetch the latest 100 memes created from the backend

        HTTP Method - GET

        Endpoint - /memes

        Error:
        If there are no memes available, an empty array shall be returned.

6. Endpoint to specify a particular id (identifying the meme) to fetch a single Meme.

        HTTP Method - GET

        Endpoint - /memes/<id>

        Error:
        If a meme with that Id doesn’t exist, a 404 HTTP response code should be returned.

7. The database shall be designed to store and retrieve the meme content.

8. The Frontend shall have a form at the top which can be used by users to post memes with these fields - Name of the meme creator, Caption for the meme and URL of the meme image. It shall send these inputs to the backend.

9. The Frontend shall list the latest 100 memes posted, either in the lower section of the page (below the form) or on a separate page. It shall fetch these details from the backend.

10. Each meme shall list these three fields one below the other - Name of the meme creator, the caption for the meme, the image fetched from the meme URL.

Display memes in the reverse chronological order i.e. last created one first.


#### Tech stack used:
- Mongo DB
- Express
- React
- Node JS

* Deployed front-end and back-end using AWS' EC2

#### Front-End:
- The front end is created using react library (create-react-app).
- React cards and material UI are used efectively to display the memes in a presentable manner.
- The landing page has space for the users to fill their details in a form.
- The view memes page will display all the memes that has been posted.


#### Back-End:
- Back end is created using mongo, node and express.
- Using node and express, the main four operations can be performed, namely: GET, POST, UPDATE AND DELETE.
- /memes endpoint allows the users to send in the details (post) and get back/fetch the details back.
- The users can update the url/caption using the meme id and also can delete a particular meme if you wish to.
