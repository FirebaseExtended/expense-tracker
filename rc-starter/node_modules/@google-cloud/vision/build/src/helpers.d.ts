/// <reference types="node" />
import * as protoTypes from '../protos/protos';
interface FeatureFunction {
    (request: string | ImprovedRequest | Buffer): Promise<[protoTypes.google.cloud.vision.v1.IAnnotateImageResponse]>;
}
export interface FeaturesMethod {
    annotateImage: FeatureFunction;
    faceDetection: FeatureFunction;
    landmarkDetection: FeatureFunction;
    labelDetection: FeatureFunction;
    safeSearchDetection: FeatureFunction;
    imageProperties: FeatureFunction;
    cropHints: FeatureFunction;
    webDetection: FeatureFunction;
    logoDetection: FeatureFunction;
    textDetection: FeatureFunction;
    documentTextDetection: FeatureFunction;
    productSearch?: FeatureFunction;
    objectLocalization?: FeatureFunction;
}
interface ImprovedRequest {
    image?: {
        source?: {
            filename?: string;
            imageUri?: string;
        };
        content?: Uint8Array | string | null;
    };
    features?: any;
}
export declare function call(apiVersion: string): FeaturesMethod;
export {};
