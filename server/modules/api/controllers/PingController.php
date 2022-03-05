<?php

namespace app\modules\api\controllers;

use app\common\Constants;
use Yii;

class PingController extends \yii\web\Controller
{
  public $enableCsrfValidation = false;

  /**
   * Renders the index view for the module
   * @return array
   * @throws \yii\base\Exception
   */
  public function actionIndex()
  {
    \Yii::$app->response->statusCode = 200;
    \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    return [
      Constants::RESULT => "ok",
      "isGuest" => Yii::$app->user->isGuest
    ];
  }
}
