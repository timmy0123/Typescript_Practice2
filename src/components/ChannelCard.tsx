import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
import { borderRadius } from '@mui/system';

type idtype = {
  kind:string;
  videoId?:string;
  channelId?:string;
}
type snippettype = {
  channelId:string;
  channelTitle:string;
  description:string;
  liveBroadcastContent:string;
  publishTime:string;
  publishedAt:string;
  thumbnails:{default:{height:number;url:string;width:number;};
              high:{height:number;url:string;width:number;};
              maxres:{height:number;url:string;width:number;};
              medium:{height:number;url:string;width:number;};
              standard:{height:number;url:string;width:number;};
              };
  title:string;
}
type partype = {
  id:idtype;
  kind:string;
  snippet:snippettype;
  statistics?: any;
}
type channeltype = {
  channelDetail:partype;
  marginTop?: string;
}
const ChannelCard:React.FC<channeltype> = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: { xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
      }}
    >
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign:'center', color: '#fff'}}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            title={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subcribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard