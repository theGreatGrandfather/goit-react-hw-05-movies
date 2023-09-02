import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from './SearchForm.styled'

function SearchForm({setQuery, onInputChange}) {
    return (
        <Form  onSubmit={setQuery}>
            <Input
                name='name'
                onChange={onInputChange}
                type="text"
            />
            <Button type='submit'>search</Button>
        </Form>
    )
}

SearchForm.propTypes = {
    setQuery: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
}

export default SearchForm
