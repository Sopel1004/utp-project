import styled from 'styled-components';
import Temp from '../SignUp/style';
import {ReactComponent as Eye} from '../../images/eye.svg';
import {ReactComponent as EyeOff} from '../../images/eye-off.svg';

const EyeIcon = styled(Eye)`
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
`;

const EyeOffIcon = styled(EyeOff)`
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
`;

const Form__PasswordContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Styled = {
    ...Temp,
    Form__PasswordContainer,
    EyeIcon,
    EyeOffIcon
};

export default Styled;