const About=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            {props.children}
        </div>
       
    )
}

export default About