import React from 'react'
import Autocomplete from 'react-autocomplete'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    render() {
        

        return (
            <>
                <Autocomplete
                    shouldItemRender={(item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
                        >
                            {item}
                        </div>
                    }
                    ref={this.props.register, this.props.image}
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
            </>
        )
    }
}


export default Search
