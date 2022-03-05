<?php

namespace app\modules\api;

use yii\web\ErrorHandler;
use yii\web\JsonParser;
use yii\web\Request;

class ApiModule extends \yii\base\Module
{

    public function init()
    {
        parent::init();
        \Yii::configure($this, [
            'components' => [
                'errorHandler' => [
                    'class' => ErrorHandler::class,
                    'errorAction' => '/api/error',
                ],
                'request' => [
                    'class' => Request::class,
                    'parsers' => [
                        'application/json' => JsonParser::class,
                    ]
                ],
            ],
        ]);

        /** @var ErrorHandler $handler */
        $handler = $this->get('errorHandler');
        \Yii::$app->set('errorHandler', $handler);
        $handler->register();
        $request = $this->get('request');
        \Yii::$app->set('request', $request);
    }
}
