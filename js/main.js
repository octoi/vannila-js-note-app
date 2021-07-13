import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js';

const app = document.getElementById('app');
const view = new NotesView(app, {
    onNoteAdd: () => {
        alert("Add note")
    },
    onNoteEdit: (newTitle, newBody) => {
        console.log(newBody);
    },
    onNoteSelect: (id) => {
        // view.updateActiveNote(NotesAPI.getAllNotes()[id]);
    },
    onNoteDelete: (id) => {
        alert(id);
    }
})

view.updateNoteList(NotesAPI.getAllNotes());