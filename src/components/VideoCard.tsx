import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

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
}
type videotype = {
  video:partype;
}
const VideoCard:React.FC<videotype> = ({video}) => {
  return (
    <Card sx={{width: { sm: '358px', md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}`: demoVideoUrl}>
        <CardMedia 
          image={video?.snippet?.thumbnails?.high?.url}
          title={video?.snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: '320px'}, height: 180}}
        />
      </Link>
      <CardContent
          sx={{ backgroundColor: '#1e1e1e', height: '106px'}}
        >
          <Link to={video.id.videoId ? `/video/${video.id.videoId}`: demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
              {video?.snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>
          <Link to={video.snippet.channelId ? `/channel/${video.snippet.channelId}`: demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold" color="gray">
              {video?.snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}/>
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard