export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');

        return notes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
    }

    static saveNote(noteToSave) {

    }

    static deleteNote(id) {

    }
}