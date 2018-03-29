import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const failure = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label>Failure type</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label >Room</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
            <Label>Building</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Failure description</Label>
                <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default failure;