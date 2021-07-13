export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;

        this.root.innerHTML = `
            <div class="notes-sidebar">
            <button class="notes-add" type="button">Add Note</button>

                <div class="notes-list">
                    <div class="notes-list-item notes-list-item--selected">
                        <div class="notes-small-title">Lecture Notes</div>
                        <div class="notes-small-body">I Learn nothing today</div>
                        <div class="notes-small-updated">date</div>
                    </div>
                </div>
            </div>

            <div class="notes-preview">
                <input type="text" class="notes-title" placeholder="Enter a title ...">
                <textarea class="notes-body">I'm the notes body</textarea>
            </div>
        `;
    }

}