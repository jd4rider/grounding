import Dropdown from 'react-bootstrap/Dropdown';


function DropdownJF(props: any) {
  
    function handleDifficulty(eventKey: any) {
        // You can add more logic here to handle the selected difficulty
        props.setDifficulty(eventKey.target.textContent.toLowerCase()); // Call the passed function with the selected difficulty
        localStorage.setItem('difficulty', eventKey.target.textContent.toLowerCase());
    }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Difficulty
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleDifficulty}>Easy</Dropdown.Item>
        <Dropdown.Item onClick={handleDifficulty}>Medium</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownJF;