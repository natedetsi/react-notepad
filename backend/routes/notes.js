const router = require('express').Router();
let Note = require("../models/notes.model");
//find notes
router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

//add notes
router.route('/add').post((newNote, res) => {
  const title = newNote.body.title;
  const content = newNote.body.content;
  //create new note
  const postNote = new Note({
    title,
    content
  });
  // save new note
  postNote.save()
    .then(() => res.json('Note added'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//  get by id
  router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
      .then(notes => res.json(notes))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  //find by id and then delete note
  router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
      .then(() => res.json('Note Deleted'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  //update note by id

  router.route('/update/:id').post((req, res) => {
    Note.findById(req.params.id)
      .then(note => {
        note.title = req.body.title;
        note.content = req.body.content

        note.save()
          .then(() => res.json('Note Updated Successfully'))
          .catch(err => res.status(400).json('Error: ' + err));
      });


});

module.exports = router;
