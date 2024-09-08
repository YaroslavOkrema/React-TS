import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(inputRef.current?.value);
    }

    function clickHandler(event: React.MouseEvent<HTMLButtonElement>){
        console.log(value);
    }

    function dragHandler(event: React.DragEvent<HTMLDivElement>) {
        console.log('DRAG');
    }

    function dragWithPreventHandler(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDrag(true);
    }

    function leaveHandler(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDrag(false);
    }

    function dropHandler(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault();
        setIsDrag(false);
        console.log('DROP')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Управляемый"/>
            <input ref={inputRef} type="text" placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>click</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}
            >

            </div>
        </div>
    );
};

export default EventsExample;