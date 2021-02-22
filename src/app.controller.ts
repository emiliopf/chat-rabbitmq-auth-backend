import { Controller, Post, Body } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(
    private readonly jwtService: JwtService,
    ) {}


  @Post('/auth/user')
  authUser(@Body() body): string {
    const { username, password: token, vhost } = body;
    
    try {
      const { idUser, idRoom, rol } = this.jwtService.verify(token);

      if (`${idUser}-${idRoom}` !== username) {
        return 'deny';
      }

      return 'allow';
    } catch(error) {
      return 'deny';
    }
  }

  @Post('/auth/vhost')
  authVhost(@Body() body): string {
    const { username, vhost, ip } = body;

    if (vhost !=='/') {
      return 'deny';
    }
    return 'allow';
  }

  @Post('/auth/resource')
  authResource(@Body() body): string {
    const { username, vhost, resource, name, permission } = body;

    if (resource === 'exchange') {
      if (permission !== 'read') {
        return 'deny';
      }

      const [idUser, idRoom] = username.split('-');
      if (name !== `ROOM-${idRoom}`) {
        return 'deny';
      }
    }

    return 'allow';
  }

  @Post('/auth/topic')
  authTopic(@Body() body): string {
    const { username, vhost, resource, name, permission, routing_key } = body;

    if (permission !== 'read') {
      return 'deny';
    }

    return 'allow';
  }
}
