import React from 'react'


const Projectdata = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  }
  
  return (
    <>
      <div style={{ display: 'flex' }}>
        <LeftSection handleClick={handleItemClick} />
        <RightSection selectedItem={selectedItem} />
      </div>
    </>
  )
}

export default Projectdata