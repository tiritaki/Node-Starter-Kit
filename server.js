const express = require("express");
const app = express()
app.use(express.json())

const albumsData = [
    {
      albumId: "10",
      artistName: "Beyoncé",
      collectionName: "Lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
      albumId: "11",
      artistName: "Beyoncé",
      collectionName: "Dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
        albumId: "12",
        artistName: "BeyoncéNew",
        collectionName: "Dangerously In Love",
        artworkUrl100:
          "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "Pop",
        url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
      },
  ];

// get list of albums
app.get("/albums", (req, res) => {res.send(albumsData)})

//get album by id by using req.parmas
app.get("/albums/:albumId", (req, res) => {res.send(
        albumsData.filter(item => item.albumId.includes(req.params.albumId)))})

// Use Postman to POST this data to /albums endpoint.
app.post("/albums", (req, res) => {
    console.log("POST /album route")
    console.log(req.body)
    albumsData.push(req.body)
})

//Delete an album
app.delete("/albums/:albumId", (req, res) => {
  console.log("DELETE/ album route",  req.params.albumId)
  albumsData.filter( id  => id.albumId !== req.params.albumId);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!')
})