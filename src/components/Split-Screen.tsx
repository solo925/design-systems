/* eslint-disable react-refresh/only-export-components */
import type { ComponentType } from 'react';
import styled from 'styled-components';

interface SplitScreenProps {
    Left: ComponentType<unknown>;
    Right: ComponentType<unknown>;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Panel = styled.div`
    flex: 1;
    `;

export const SplitScreen: ComponentType<SplitScreenProps> = ({ Right, Left }: SplitScreenProps) => {
    return (
        <Container>
            <Panel>
                <Left />
            </Panel>
            <Panel>
                <Right />
            </Panel>
        </Container>
    );
};      
