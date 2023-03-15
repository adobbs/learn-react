function Skills() {
    const skills = [
        { name: 'Figma', id: 1 },
        { name: 'React', id: 2 },
        { name: 'CSS', id: 3 }
    ];

    const listSkills = skills.map(skill => 
        <li key={skill.id}>
            {skill.name}
        </li>
    );

    return (
        <>
            <p style={{marginBottom: '0.5em'}}>Here are your skills:</p>
            <ul style={{marginTop: 0}}>{listSkills}</ul>
        </>
    );
}

export default Skills;
