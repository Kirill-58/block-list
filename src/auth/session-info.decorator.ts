import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SessionInfo = createParamDecorator(
  (_, context: ExecutionContext) => context.switchToHttp().getRequest().session,
);
