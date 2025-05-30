<?php
namespace Tests;

use PHPUnit\Framework\TestCase;

class PingServiceTest extends TestCase
{
    public function testPing()
    {
        $input = ['message' => 'test'];
        $_SERVER['REQUEST_METHOD'] = 'POST';

        ob_start();
        include __DIR__ . '/../server.php';
        $output = ob_get_clean();

        $response = json_decode($output, true);

        $this->assertArrayHasKey('message', $response);
        $this->assertEquals('test', $response['message']);
    }
}