import NotesView from './NotesView.js';

export default class App {
    constructor(root) {
        this.notes = [];
        this.activeNote = null;
        this.view = new NotesView(root, this._handlers());
    }

    _handlers() {
        return {
            onNoteSelect: noteId => {
                alert("a")
            },
            onNoteAdd: () => {
                alert("b")
            },
            onNoteEdit: (title, body) => {
                alert("c")
            },
            onNoteDelete: noteId => {
                alert("d")
            },
        };
    }
}