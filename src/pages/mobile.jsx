

import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MobileCard from '../component/ExperienceCard2';
import { mobile } from '../data/constants'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:white;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
   
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color:rgb(199, 197, 215);
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: white !important;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
   color: rgb(212, 208, 216);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;



const Mobile = () => {
    return (
        <Container id="mobile">
            <Wrapper>
                <Title>Projects Web</Title>
                <Desc>
                    My work mobile as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {mobile.map((mobile,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" />
                                    {index !== mobile.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <MobileCard mobile={mobile}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Mobile