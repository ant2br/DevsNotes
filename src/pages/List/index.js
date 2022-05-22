import React, {useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Container,
     AddButton,
      AddButtonImage,
       NotesList,
        NoNotes,
         NoNotesText,
         NoNotesImage} from './styles';
import { useSelector } from "react-redux";

import NoteItem from "../../../src/components/NoteItem";
export default () => {
    const navigation = useNavigation();
    const list = useSelector(state => state.notes.list);

    handleEdit = (index) => {
        navigation.navigate("Edit", {key: index});
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Suas notas',
            headerRight: () => (
                <AddButton underlayColor="transparent" onPress={() =>{navigation.navigate('Edit')}}>
                    <AddButtonImage source={require('../../assets/more.png')} />
                </AddButton>
            )
        });
    }, []);
    return (
        <Container>
            {list.length >= 0 &&
            <NotesList
                data={list}
                renderItem={({item, index}) => (
                    <NoteItem 
                        data={item}
                        index={index}
                        onPress={handleEdit}
                    />
                )}
                keyExtractor={(item, index)=>index.toString()}
            />
                }
            {list.length === 0 &&
            <NoNotes>
                <NoNotesImage source={require('../../assets/note.png')} />
                <NoNotesText>Nenhuma nota cadastrada</NoNotesText>

            </NoNotes>
            }       
        </Container>
    )
}