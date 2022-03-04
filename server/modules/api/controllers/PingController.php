<?php

namespace app\modules\api\controllers;

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
    return "ok";
  }
}
