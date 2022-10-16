import React from "react";
import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors
} from '.././styles/appStyles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({handleClearTodos}) => {
    return (
        <HeaderView>
            <HeaderTitle>To-Do.</HeaderTitle>
            <HeaderButton
                onPress={handleClearTodos} 
            >
                <MaterialCommunityIcons name="playlist-remove" size={35} color={colors.tertiary} />
            </HeaderButton>
            
        </HeaderView>
    );
}

export default Header;