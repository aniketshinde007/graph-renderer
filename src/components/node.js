import React from 'react';

const Node = ({node}) => {

    const nodeGroupStyle = {
        margin: '8px',
        backgroundColor: '#ffffff',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    
    const nodeStyle = {
        width: '200px',
        height: '60px',
        backgroundColor: '#282c34',
        border: '2px solid #ccc',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '16px',
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    };

    const OnlyNode = ({title}) => {
        return <div style={nodeStyle}>
            <span style={titleStyle}>{title}</span>
        </div>
    }

    return (
        <div style={nodeGroupStyle}>
            <OnlyNode title={node.title}/>
            {/* <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <OnlyNode title={'A'}/>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <OnlyNode title={'B'}/>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <OnlyNode title={'C'}/>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <OnlyNode title={'G'}/>
                        <OnlyNode title={'H'}/>
                    </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <OnlyNode title={'D'}/>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <OnlyNode title={'E'}/>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <OnlyNode title={'G'}/>
                            <OnlyNode title={'F'}/>
                        </div>
                    </div>
                </div>          
                </div>
            </div> */}
        </div>
    );
};

export default Node;
