<?php

namespace app\modules\api\controllers;

use app\common\Constants;
use app\models\Wif;
use Yii;

class NodeController extends \yii\web\Controller
{
  public $enableCsrfValidation = false;

  public function actionGetUtxos()
  {
    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::DATA => []
    ];
  }
}
