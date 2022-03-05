<?php

namespace app\modules\api;

use yii\web\ErrorHandler;
use yii\web\Response;

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
            ],
        ]);

        /** @var ErrorHandler $handler */
        $handler = $this->get('errorHandler');
        \Yii::$app->set('errorHandler', $handler);
        $handler->register();
    }
}
