import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';

async function bootstrap() {

	const app = await NestFactory.create(AppModule);

	const options = new DocumentBuilder()
    .setTitle('Focus-Demo')
    .setDescription('Api para demo en Focus360º')
    .setVersion('0.1')
    .addTag('contacts')
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);
		

  await app.listen(3000);
}
bootstrap();
