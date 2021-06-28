function Todo({todo, index, remove}){

    function handle() {
        remove(index);
    }

    return (
        <div className='todo' key={index} id={index} onClick={handle}>{todo.text}
            <span className='remove-span'>[<span className='inner-span'>-</span>]</span>
        </div>
    )
}