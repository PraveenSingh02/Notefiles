const addbtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");


const saveNotes= ()=>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )

    if(data.length === 0){
        localStorage.removeItem("notes")

    }else{
        localStorage.setItem("notes",JSON.stringify(data));

    }
   // localStorage.setItem("notes",JSON.stringify(data));
   // console.log(data)
}

addbtn.addEventListener("click",
    function(){
        addNotes();
    }
);



/* <div class="notes">
            <div class="tool">  
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            <textarea></textarea>
        </div> */

const addNotes =(text =" ") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<div class="notes">
            <div class="tool">  
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class=" trash fa-solid fa-trash"></i>
            </div>
            <textarea>${text}</textarea>
           </div>`;

           note.querySelector(".trash").addEventListener("click", function() {
            
            note.remove();
            saveNotes();
           });
           note.querySelector(".save").addEventListener("click", function(){
            saveNotes()
           });

           note.querySelector("textarea").addEventListener("focusout", 
            function(){
                saveNotes();

           })
     
        main.appendChild(note);
        saveNotes();
}

( 
    function(){
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes=== null){
            addNotes();

        }else{
            lsnotes.forEach(
                (lsnotes)=>{
                    addNotes(lsnotes)
                }
            )

        }
        
        // if(lsnotes.lsnotes==0){
        //     localStorage.removeItem("notes");
        // }else{
        //     addNotes();
        // }
    
        //console.log(notes);

    }
)()