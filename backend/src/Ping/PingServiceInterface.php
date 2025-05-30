<?php

namespace Ping;

use Spiral\GRPC;

interface PingServiceInterface extends GRPC\ServiceInterface
{
    public const NAME = "src.PingService";

    /**
    * @param GRPC\ContextInterface $ctx
    * @param PingRequest $in
    * @return PingResponse
    *
    * @throws GRPC\Exception\InvokeException
    */
    public function Ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse;
}
