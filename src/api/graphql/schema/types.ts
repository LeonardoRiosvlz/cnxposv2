export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** Represents NULL values */
  Void: any;
};

export enum Action_List {
  Create = 'CREATE',
  Update = 'UPDATE',
  DeleteOne = 'DELETE_ONE',
  DeleteMany = 'DELETE_MANY',
  GetAll = 'GET_ALL',
  GetPaginated = 'GET_PAGINATED',
  GetOne = 'GET_ONE',
  UsersGetUserProfile = 'USERS_GET_USER_PROFILE',
  FilesGetWriteSignedUrl = 'FILES_GET_WRITE_SIGNED_URL',
  FilesCreateUploadedFile = 'FILES_CREATE_UPLOADED_FILE',
  TenantGetConnection = 'TENANT_GET_CONNECTION'
}

export enum App_Modules {
  Users = 'USERS',
  UserArea = 'USER_AREA',
  UserPosition = 'USER_POSITION',
  UserRoles = 'USER_ROLES',
  Tenant = 'TENANT',
  Files = 'FILES',
  Notifications = 'NOTIFICATIONS',
  Sales = 'SALES',
  Products = 'PRODUCTS',
  Company = 'COMPANY',
  Taxes = 'TAXES',
  Group = 'GROUP',
  Warehouse = 'WAREHOUSE',
  BarCodeIdentifier = 'BAR_CODE_IDENTIFIER',
  BillingResolution = 'BILLING_RESOLUTION',
  Composition = 'COMPOSITION',
  ProductArea = 'PRODUCT_AREA',
  ProductGroup = 'PRODUCT_GROUP',
  ProductMenu = 'PRODUCT_MENU',
  ProductParams = 'PRODUCT_PARAMS',
  TaxesAndCosts = 'TAXES_AND_COSTS',
  UnitMeasurement = 'UNIT_MEASUREMENT',
  ProductSalePrice = 'PRODUCT_SALE_PRICE',
  SpecialPrices = 'SPECIAL_PRICES',
  PriceByVolume = 'PRICE_BY_VOLUME',
  Services = 'SERVICES',
  PreparationType = 'PREPARATION_TYPE',
  PartialTotalPhysicalInventory = 'PARTIAL_TOTAL_PHYSICAL_INVENTORY',
  PartialInventoryItems = 'PARTIAL_INVENTORY_ITEMS',
  InitialPhysicalInventory = 'INITIAL_PHYSICAL_INVENTORY',
  InventoryCovementConpepts = 'INVENTORY_COVEMENT_CONPEPTS',
  ThirdParties = 'THIRD_PARTIES',
  ThirdPartyClassification = 'THIRD_PARTY_CLASSIFICATION',
  InventoryMovement = 'INVENTORY_MOVEMENT',
  MonetaryDenomination = 'MONETARY_DENOMINATION',
  Purchase = 'PURCHASE',
  PurchaseReturns = 'PURCHASE_RETURNS',
  Serial = 'SERIAL',
  CashDocument = 'CASH_DOCUMENT',
  ProductCategory = 'PRODUCT_CATEGORY',
  Preparation = 'PREPARATION'
}

export enum Accounting {
  None = 'NONE',
  CashRegister = 'CASH_REGISTER',
  Banks = 'BANKS',
  Credits = 'CREDITS'
}

export enum AlwaysLinkedWith {
  None = 'NONE',
  Banks = 'BANKS',
  CreditCardAndBanks = 'CREDIT_CARD_AND_BANKS',
  Credits = 'CREDITS'
}

export type AuthProviderDataResponse = {
  thirdPartyId: Scalars['String'];
  provider: Scalars['String'];
};

export type AuthRoleResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  permits: Array<PermitsResponse>;
};

export type AuthUserResponse = {
  userId: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  email: Scalars['String'];
  roles: Array<AuthRoleResponse>;
  username?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  avatarFile?: Maybe<CloudFileResponse>;
};

export type AvailablePermitsResponse = {
  module: App_Modules;
  actions: Array<Action_List>;
};

export type BanksFilterFilter = {
  and?: Maybe<Array<BanksFilterFilter>>;
  or?: Maybe<Array<BanksFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type BanksResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  accountingAccount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum BarCodeFormat {
  Code_128_3Labels = 'CODE_128_3_LABELS',
  Code_128_2Labels = 'CODE_128_2_LABELS',
  Ean_13_3Labels = 'EAN_13_3_LABELS',
  Code_128_3LabelsWithCompany = 'CODE_128_3_LABELS_WITH_COMPANY',
  Code_128_3LabelsWithCompanyCompressed = 'CODE_128_3_LABELS_WITH_COMPANY_COMPRESSED',
  Gondola_70_32 = 'GONDOLA_70_32',
  Zebra_5_08_2_0Lp_2824 = 'ZEBRA_5_08_2_0_LP_2824',
  Code_128_3LabelsWithCompanyWithoutPrice = 'CODE_128_3_LABELS_WITH_COMPANY_WITHOUT_PRICE',
  GondolaWithBarcodeC70_32 = 'GONDOLA_WITH_BARCODE_C70_32',
  Jewelry_91_5_1 = 'JEWELRY_91_5_1',
  LabelsAdditionalData_55_40 = 'LABELS_ADDITIONAL_DATA_55_40',
  LabelArgox_3Labels_32_25 = 'LABEL_ARGOX_3_LABELS_32_25',
  LabelSatoC128_40_30 = 'LABEL_SATO_C128_40_30'
}

export enum BarCodeIdentifier {
  Barcode = 'BARCODE',
  InternalCode = 'INTERNAL_CODE'
}

export type BarCodeIdentifierFilterFilter = {
  and?: Maybe<Array<BarCodeIdentifierFilterFilter>>;
  or?: Maybe<Array<BarCodeIdentifierFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  price?: Maybe<StringFieldComparison>;
  currency?: Maybe<StringFieldComparison>;
  quantity?: Maybe<StringFieldComparison>;
  identifier?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type BarCodeIdentifierResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  price: Scalars['Float'];
  currency: Scalars['String'];
  quantity: Scalars['Int'];
  identifier: BarCodeIdentifier;
  barCodeFormat: BarCodeFormat;
  warehouse: SolvedEntityResponse;
  company: SolvedEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BillingResolutionFilterFilter = {
  and?: Maybe<Array<BillingResolutionFilterFilter>>;
  or?: Maybe<Array<BillingResolutionFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  resolutionNumber?: Maybe<StringFieldComparison>;
  prefix?: Maybe<StringFieldComparison>;
  from?: Maybe<StringFieldComparison>;
  to?: Maybe<StringFieldComparison>;
  initialNumber?: Maybe<StringFieldComparison>;
  finalNumber?: Maybe<StringFieldComparison>;
  resolutionClass?: Maybe<StringFieldComparison>;
  resolutionType?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type BillingResolutionResponse = {
  id: Scalars['ID'];
  resolutionNumber: Scalars['String'];
  prefix: Scalars['String'];
  initialNumber: Scalars['Int'];
  finalNumber: Scalars['Int'];
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  localBilling: Scalars['Boolean'];
  resolutionClass: ResolutionClass;
  resolutionType: ResolutionType;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BooleanFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['ID'];
};

export type CloudFileIdResponse = {
  key: Scalars['String'];
  url: Scalars['String'];
};

export type CloudFileResponse = {
  id: Scalars['ID'];
  key?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CompanyFilterFilter = {
  and?: Maybe<Array<CompanyFilterFilter>>;
  or?: Maybe<Array<CompanyFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  country?: Maybe<StringFieldComparison>;
  webSite?: Maybe<StringFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  nit?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CompanyResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  country: Scalars['String'];
  city: Scalars['String'];
  webSite: Scalars['String'];
  address: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  nit: Scalars['String'];
  isActive: Scalars['Boolean'];
  contact?: Maybe<SolvedEntityResponse>;
  photoFile?: Maybe<CloudFileResponse>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompositionDecompositionFilterFilter = {
  and?: Maybe<Array<CompositionDecompositionFilterFilter>>;
  or?: Maybe<Array<CompositionDecompositionFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CompositionDecompositionResponse = {
  id: Scalars['ID'];
  compositionType: CompositionType;
  warehouse?: Maybe<SolvedEntityResponse>;
  userAdmin?: Maybe<SolvedEntityResponse>;
  product?: Maybe<SolvedEntityResponse>;
  code: Scalars['String'];
  quantity: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompositionFilterFilter = {
  and?: Maybe<Array<CompositionFilterFilter>>;
  or?: Maybe<Array<CompositionFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  ref?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CompositionResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  ref: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  um?: Maybe<SolvedEntityResponse>;
  area?: Maybe<SolvedEntityResponse>;
  photoFile?: Maybe<CloudFileResponse>;
  products?: Maybe<Array<SolvedEntityResponse>>;
  compound: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum CompositionType {
  Composition = 'COMPOSITION',
  Decomposition = 'DECOMPOSITION'
}

export type CreateBanksInput = {
  name: Scalars['String'];
  accountingAccount?: Maybe<Scalars['Int']>;
};

export type CreateBarCodeIdentifierInput = {
  code: Scalars['String'];
  price: Scalars['Float'];
  currency?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  identifier: BarCodeIdentifier;
  barCodeFormat: BarCodeFormat;
  warehouse?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
};

export type CreateBillingResolutionInput = {
  resolutionNumber: Scalars['String'];
  prefix: Scalars['String'];
  initialNumber: Scalars['Int'];
  finalNumber: Scalars['Int'];
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  resolutionClass: ResolutionClass;
  resolutionType: ResolutionType;
  localBilling?: Maybe<Scalars['Boolean']>;
};

export type CreateCompanyInput = {
  name: Scalars['String'];
  country: Scalars['String'];
  city: Scalars['String'];
  webSite: Scalars['String'];
  address: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  nit: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  photoFile?: Maybe<Scalars['ID']>;
  contact?: Maybe<Scalars['ID']>;
};

export type CreateCompositionDecompositionInput = {
  warehouse?: Maybe<Scalars['ID']>;
  userAdmin?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
  compositionType: CompositionType;
  code: Scalars['String'];
  quantity: Scalars['Int'];
};

export type CreateCompositionInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ref: Scalars['String'];
  um?: Maybe<Scalars['ID']>;
  area?: Maybe<Scalars['ID']>;
  photoFile?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Scalars['ID']>>;
  compound: Scalars['Boolean'];
};

export type CreateCreditCardInput = {
  name: Scalars['String'];
  commission?: Maybe<Scalars['Float']>;
  photoFile?: Maybe<Scalars['ID']>;
};

export type CreateEconomicActivitiesInput = {
  codeCiu: Scalars['Int'];
  codeActivity: Scalars['Int'];
  rate: Scalars['Int'];
  nameActivity: Scalars['String'];
};

export type CreateFilesInput = {
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
};

export type CreateFiscalResponsibilityInput = {
  codeDian: Scalars['Int'];
  taxDescription?: Maybe<Scalars['String']>;
};

export type CreateGroupInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  area?: Maybe<Scalars['ID']>;
  leader: Scalars['ID'];
  members: Array<Scalars['ID']>;
};

export type CreateInitialPhysicalInventoryInput = {
  currentquantity: Scalars['Float'];
  previousQuantity: Scalars['Float'];
  newQuantity: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitPrice: Scalars['Float'];
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  partialInventory?: Maybe<Scalars['ID']>;
};

export type CreateInventoryCovementConceptsInput = {
  name: Scalars['String'];
  requestThird?: Maybe<Scalars['Boolean']>;
  loadAllProducts?: Maybe<Scalars['Boolean']>;
  valueType: ValueTypes;
  movementType: MovementType;
};

export type CreateInventoryMovementInput = {
  concepts?: Maybe<Scalars['ID']>;
  warehouse?: Maybe<Scalars['ID']>;
  third?: Maybe<Scalars['ID']>;
  settingNumber: Scalars['Int'];
  detail?: Maybe<Scalars['String']>;
  movementDate: Scalars['DateTime'];
  movementStatus: MovementStatus;
};

export type CreateInventoryMovementItemsInput = {
  currentquantity: Scalars['Float'];
  previousQuantity: Scalars['Float'];
  newQuantity: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitPrice: Scalars['Float'];
  entry: Scalars['Float'];
  output: Scalars['Float'];
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  movementInventory?: Maybe<Scalars['ID']>;
};

export type CreateInventoryTransferInput = {
  originWarehouse?: Maybe<Scalars['ID']>;
  destinationWarehouse?: Maybe<Scalars['ID']>;
  transfertDate: Scalars['DateTime'];
  transferNumber: Scalars['Int'];
  document: Scalars['String'];
  detail?: Maybe<Scalars['String']>;
  transferStatus: TransferStatus;
};

export type CreateInventoryTransferItemsInput = {
  originQuantity: Scalars['Float'];
  totalTransfer: Scalars['Float'];
  originRestant: Scalars['Float'];
  destinationBalance: Scalars['Float'];
  transfer: Scalars['Float'];
  destinationBalanceTotal: Scalars['Float'];
  movementTransfer?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
};

export type CreateMonetaryDenominationInput = {
  value: Scalars['Float'];
  photoFile?: Maybe<Scalars['ID']>;
  monetaryDenominationTypes: MonetaryDenominationTypes;
};

export type CreatePartialInventoryItemsInput = {
  currentquantity: Scalars['Float'];
  previousQuantity: Scalars['Float'];
  newQuantity: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitPrice: Scalars['Float'];
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  partialInventory?: Maybe<Scalars['ID']>;
};

export type CreatePartialTotalPhysicalInventoryInput = {
  detail: Scalars['String'];
  number: Scalars['Int'];
  warehouse?: Maybe<Scalars['ID']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
};

export type CreatePaymentMethodInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  cashOnHand?: Maybe<Scalars['Boolean']>;
  credit?: Maybe<Scalars['Boolean']>;
  divideIntoInstallments?: Maybe<Scalars['Boolean']>;
  paycheck?: Maybe<Scalars['Boolean']>;
  deferPayment?: Maybe<Scalars['Boolean']>;
  days?: Maybe<Scalars['Int']>;
  accounting?: Maybe<Accounting>;
  alwaysLinkedWith?: Maybe<AlwaysLinkedWith>;
  accountingAccount: Scalars['String'];
  askBank?: Maybe<Scalars['Boolean']>;
  askBoucherNumber?: Maybe<Scalars['Boolean']>;
  askDocumentDate?: Maybe<Scalars['Boolean']>;
  askCardType?: Maybe<Scalars['Boolean']>;
  paymentMethodDian?: Maybe<Scalars['ID']>;
  paymentMethodDianType?: Maybe<PaymentMethodDianType>;
  administersDominicilios?: Maybe<Scalars['Boolean']>;
  administersBonuses?: Maybe<Scalars['Boolean']>;
  administersAdvanceReservationsOrders?: Maybe<Scalars['Boolean']>;
  affectVouchersConsignmentsThirds?: Maybe<Scalars['Boolean']>;
  showIva?: Maybe<Scalars['Boolean']>;
  iva?: Maybe<Scalars['ID']>;
  confirmReturns?: Maybe<Scalars['Boolean']>;
  confirmCreditCut?: Maybe<Scalars['Boolean']>;
  photoFile?: Maybe<Scalars['ID']>;
};

export type CreatePreparationInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CreatePreparationTypeInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  preparation?: Maybe<Array<Scalars['ID']>>;
};

export type CreateProductAreaInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  attentionArea?: Maybe<Scalars['Boolean']>;
};

export type CreateProductCategoryInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CreateProductGroupInput = {
  name: Scalars['String'];
  sortingToOrders?: Maybe<Scalars['Boolean']>;
  source: Scalars['String'];
  tipInOrder?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['ID']>>;
  warehouses?: Maybe<Array<Scalars['ID']>>;
  taxAppliedToPurchases?: Maybe<Array<Scalars['ID']>>;
  taxAppliedToSales?: Maybe<Array<Scalars['ID']>>;
  timeTax?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  compound?: Maybe<Scalars['Boolean']>;
  shoppingAssistant?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  um?: Maybe<Scalars['ID']>;
  area?: Maybe<Scalars['ID']>;
  composition?: Maybe<Scalars['ID']>;
  photoFile?: Maybe<Scalars['ID']>;
  barCode?: Maybe<Array<Scalars['ID']>>;
  groups?: Maybe<Array<Scalars['ID']>>;
};

export type CreateProductMenuInput = {
  name: Scalars['String'];
  product?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
};

export type CreateProductParamsInput = {
  updatePriceInInvoice?: Maybe<Scalars['Boolean']>;
  belongsToWarehouse?: Maybe<Scalars['Boolean']>;
  releaseToMenu?: Maybe<Scalars['Boolean']>;
  invoicePriceRangeFrom?: Maybe<Scalars['Float']>;
  invoicePriceRangeTo?: Maybe<Scalars['Float']>;
  maxDiscount?: Maybe<Scalars['Int']>;
  maxStock?: Maybe<Scalars['Int']>;
  minStock?: Maybe<Scalars['Int']>;
  replenishIn?: Maybe<Scalars['String']>;
  additional?: Maybe<Scalars['String']>;
  unitPoints?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Scalars['ID']>;
  attentionTimeServiceOrders?: Maybe<Scalars['String']>;
  calculatePriceInvoicePercentage?: Maybe<Scalars['String']>;
  pointsPerUnit?: Maybe<Scalars['String']>;
  menu?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Scalars['String']>>;
  gourmetQualify?: Maybe<Array<Scalars['String']>>;
  productWithPreparation?: Maybe<Scalars['Boolean']>;
  preparationType?: Maybe<Scalars['ID']>;
  inventoryAccount?: Maybe<Scalars['String']>;
  salesAccount?: Maybe<Scalars['String']>;
  costSaleAccount?: Maybe<Scalars['String']>;
  fixedAsset?: Maybe<Scalars['Boolean']>;
};

export type CreateProductSalePriceInput = {
  product?: Maybe<Scalars['ID']>;
  generalValueTax?: Maybe<Scalars['ID']>;
  generalValue: Scalars['Float'];
  generalUtilityValue: Scalars['Float'];
  ncTax?: Maybe<Scalars['ID']>;
  commission: Scalars['Float'];
  specialOneValueTax?: Maybe<Scalars['ID']>;
  specialOneValue: Scalars['Float'];
  specialOneUtilityValue: Scalars['Float'];
  specialTwoValueTax?: Maybe<Scalars['ID']>;
  specialTwoValue: Scalars['Float'];
  specialTwoUtilityValue: Scalars['Float'];
};

export type CreatePurchaseReturnsInput = {
  thirdSupplier: Scalars['ID'];
  purchase: Scalars['ID'];
  purchaseReturnsNumber: Scalars['Float'];
  purchaseReturnsDate: Scalars['DateTime'];
  purchaseDateNow: Scalars['DateTime'];
  totalPurchaseReturnsValue: Scalars['Float'];
  subTotalPurchaseReturnsValue: Scalars['Float'];
  discount: Scalars['Float'];
  otherTaxes: Scalars['Float'];
  reference?: Maybe<Scalars['String']>;
  purchaseReturnsStatus: PurchaseReturnsStatus;
  taxes?: Maybe<Array<Scalars['ID']>>;
  details?: Maybe<Scalars['String']>;
};

export type CreateRegimeTypeInput = {
  name: Scalars['String'];
};

export type CreateRoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsInput>;
};

export type CreateSerialInput = {
  serial: Scalars['String'];
  product?: Maybe<Scalars['ID']>;
};

export type CreateSerialMovementInput = {
  serial: Scalars['String'];
  product?: Maybe<Scalars['ID']>;
  movementInventory?: Maybe<Scalars['ID']>;
};

export type CreateSerialTransferInput = {
  serial: Scalars['String'];
  product?: Maybe<Scalars['ID']>;
  transferInventory?: Maybe<Scalars['ID']>;
};

export type CreateServicesInput = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  iva?: Maybe<Scalars['ID']>;
  um?: Maybe<Scalars['ID']>;
  area?: Maybe<Scalars['ID']>;
  groups?: Maybe<Array<Scalars['ID']>>;
  cost: Scalars['Float'];
  price: Scalars['Float'];
  ultCost: Scalars['Boolean'];
  loadOrderScreen: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateTaxesAndCostsInput = {
  product?: Maybe<Scalars['ID']>;
  shoppingTax?: Maybe<Scalars['ID']>;
  applyIco?: Maybe<Scalars['Boolean']>;
  valueIco: Scalars['Float'];
  includeIcoInCost?: Maybe<Scalars['Boolean']>;
  productCost: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitTaxCost?: Maybe<Scalars['ID']>;
  valueUnitTaxCost: Scalars['Float'];
  totalUnitCost: Scalars['Float'];
  volumePrice: Array<Scalars['String']>;
};

export type CreateTaxesInput = {
  name: Scalars['String'];
  tax: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  taxType?: Maybe<Array<TaxType>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateTenantInput = {
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  info?: Maybe<TenantInfoInput>;
};

export type CreateThirdPartiesInput = {
  identificationDocument?: Maybe<Scalars['String']>;
  verificationDigit?: Maybe<Scalars['String']>;
  identificationDocumentType: IdentificationDocumentType;
  personType: PersonType;
  barCode?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstSurname?: Maybe<Scalars['String']>;
  secondSurname?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  tradename?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  secondPhoneNumber?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  thirdPartyClassification?: Maybe<Scalars['ID']>;
  nationality?: Maybe<Scalars['String']>;
  regime: RegimeType;
  isClient?: Maybe<Scalars['Boolean']>;
  isEmployee?: Maybe<Scalars['Boolean']>;
  isSupplier?: Maybe<Scalars['Boolean']>;
  isOtherSellers?: Maybe<Scalars['Boolean']>;
  isPosBilling?: Maybe<Scalars['Boolean']>;
  photoFile?: Maybe<Scalars['ID']>;
  assignDebtQuota?: Maybe<Scalars['Boolean']>;
  debtQuota?: Maybe<Scalars['String']>;
  isSetPrices: Scalars['Boolean'];
  priceType: PriceType;
  isActive?: Maybe<Scalars['Boolean']>;
  enablePoints?: Maybe<Scalars['Boolean']>;
  baseRetention: Scalars['String'];
  percentageRetention?: Maybe<Scalars['Float']>;
  seller?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Scalars['ID']>>;
  restrictPaymentMethod?: Maybe<Scalars['Boolean']>;
  restrictAllPaymentMethod?: Maybe<Scalars['Boolean']>;
  paymentMethod?: Maybe<Array<Scalars['ID']>>;
};

export type CreateThirdPartyClassificationInput = {
  name: Scalars['String'];
  assignDebtQuota?: Maybe<Scalars['Boolean']>;
  debtQuota?: Maybe<Scalars['Float']>;
  gourmetConnection?: Maybe<Scalars['Boolean']>;
  includeServiceOrders?: Maybe<Scalars['Boolean']>;
};

export type CreateTributaryInformationInput = {
  third?: Maybe<Scalars['ID']>;
  regimeType?: Maybe<Scalars['ID']>;
  economicActivities?: Maybe<Scalars['ID']>;
  retention: Retention;
  registrationNumber: Scalars['Int'];
  taxDetail?: Maybe<Array<Scalars['ID']>>;
  fiscalResponsibility?: Maybe<Array<Scalars['ID']>>;
};

export type CreateUnitMeasurementInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CreateUploadedFileInput = {
  key: Scalars['String'];
  storage?: Maybe<FileStorageType>;
  toRemove?: Maybe<Scalars['String']>;
  isVideo?: Maybe<Scalars['Boolean']>;
};

export type CreateUserAreaInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  roles: Array<Scalars['ID']>;
  profile?: Maybe<ProfileInput>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  avatarFile?: Maybe<Scalars['ID']>;
};

export type CreateUserPositionInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreateWarehouseInput = {
  name: Scalars['String'];
  code: Scalars['String'];
  location: Scalars['String'];
  warehouseTypes: WarehouseTypes;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type CreditCardFilterFilter = {
  and?: Maybe<Array<CreditCardFilterFilter>>;
  or?: Maybe<Array<CreditCardFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type CreditCardResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  commission: Scalars['Float'];
  photoFile?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DateFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  between?: Maybe<DateFieldComparisonBetween>;
  notBetween?: Maybe<DateFieldComparisonBetween>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};


export type DeleteBanksInput = {
  entityId: Scalars['ID'];
};

export type DeleteBarCodeIdentifierInput = {
  entityId: Scalars['ID'];
};

export type DeleteBillingResolutionInput = {
  entityId: Scalars['ID'];
};

export type DeleteCompanyInput = {
  entityId: Scalars['ID'];
};

export type DeleteCompositionDecompositionInput = {
  entityId: Scalars['ID'];
};

export type DeleteCompositionInput = {
  entityId: Scalars['ID'];
};

export type DeleteCreditCardInput = {
  entityId: Scalars['ID'];
};

export type DeleteEconomicActivitiesInput = {
  entityId: Scalars['ID'];
};

export type DeleteFilesInput = {
  entityId: Scalars['ID'];
};

export type DeleteFiscalResponsibilityInput = {
  entityId: Scalars['ID'];
};

export type DeleteGroupInput = {
  entityId: Scalars['ID'];
};

export type DeleteInitialPhysicalInventoryInput = {
  entityId: Scalars['ID'];
};

export type DeleteInventoryCovementConceptsInput = {
  entityId: Scalars['ID'];
};

export type DeleteInventoryMovementInput = {
  entityId: Scalars['ID'];
};

export type DeleteInventoryMovementItemsInput = {
  entityId: Scalars['ID'];
};

export type DeleteInventoryTransferInput = {
  entityId: Scalars['ID'];
};

export type DeleteInventoryTransferItemsInput = {
  entityId: Scalars['ID'];
};

export type DeleteManyBanksInput = {
  where?: Maybe<BanksFilterFilter>;
};

export type DeleteManyBarCodeIdentifierInput = {
  where?: Maybe<BarCodeIdentifierFilterFilter>;
};

export type DeleteManyBillingResolutionInput = {
  where?: Maybe<BillingResolutionFilterFilter>;
};

export type DeleteManyCompanyInput = {
  where?: Maybe<CompanyFilterFilter>;
};

export type DeleteManyCompositionDecompositionInput = {
  where?: Maybe<CompositionDecompositionFilterFilter>;
};

export type DeleteManyCompositionInput = {
  where?: Maybe<CompositionFilterFilter>;
};

export type DeleteManyCreditCardInput = {
  where?: Maybe<CreditCardFilterFilter>;
};

export type DeleteManyEconomicActivitiesInput = {
  where?: Maybe<EconomicActivitiesFilterFilter>;
};

export type DeleteManyFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type DeleteManyFiscalResponsibilityInput = {
  where?: Maybe<FiscalResponsibilityFilterFilter>;
};

export type DeleteManyGroupInput = {
  where?: Maybe<GroupFilterFilter>;
};

export type DeleteManyInitialPhysicalInventoryInput = {
  where?: Maybe<InitialPhysicalInventoryFilterFilter>;
};

export type DeleteManyInventoryCovementConceptsInput = {
  where?: Maybe<InventoryCovementConceptsFilterFilter>;
};

export type DeleteManyInventoryMovementInput = {
  where?: Maybe<InventoryMovementFilterFilter>;
};

export type DeleteManyInventoryMovementItemsInput = {
  where?: Maybe<InventoryMovementItemsFilterFilter>;
};

export type DeleteManyInventoryTransferInput = {
  where?: Maybe<InventoryTransferFilterFilter>;
};

export type DeleteManyInventoryTransferItemsInput = {
  where?: Maybe<InventoryTransferItemsFilterFilter>;
};

export type DeleteManyMonetaryDenominationInput = {
  where?: Maybe<MonetaryDenominationFilterFilter>;
};

export type DeleteManyNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type DeleteManyPartialInventoryItemsInput = {
  where?: Maybe<PartialInventoryItemsFilterFilter>;
};

export type DeleteManyPartialTotalPhysicalInventoryInput = {
  where?: Maybe<PartialTotalPhysicalInventoryFilterFilter>;
};

export type DeleteManyPaymentMethodInput = {
  where?: Maybe<PaymentMethodFilterFilter>;
};

export type DeleteManyPreparationInput = {
  where?: Maybe<PreparationFilterFilter>;
};

export type DeleteManyPreparationTypeInput = {
  where?: Maybe<PreparationTypeFilterFilter>;
};

export type DeleteManyProductAreaInput = {
  where?: Maybe<ProductAreaFilterFilter>;
};

export type DeleteManyProductCategoryInput = {
  where?: Maybe<ProductCategoryFilterFilter>;
};

export type DeleteManyProductGroupInput = {
  where?: Maybe<ProductGroupFilterFilter>;
};

export type DeleteManyProductInput = {
  where?: Maybe<ProductFilterFilter>;
};

export type DeleteManyProductMenuInput = {
  where?: Maybe<ProductMenuFilterFilter>;
};

export type DeleteManyProductParamsInput = {
  where?: Maybe<ProductParamsFilterFilter>;
};

export type DeleteManyProductSalePriceInput = {
  where?: Maybe<ProductSalePriceFilterFilter>;
};

export type DeleteManyPurchaseReturnsInput = {
  where?: Maybe<PurchaseReturnsFilterFilter>;
};

export type DeleteManyRegimeTypeInput = {
  where?: Maybe<RegimeTypeFilterFilter>;
};

export type DeleteManyRoleInput = {
  where?: Maybe<RoleFilterFilter>;
};

export type DeleteManySerialInput = {
  where?: Maybe<SerialFilterFilter>;
};

export type DeleteManySerialMovementInput = {
  where?: Maybe<SerialMovementFilterFilter>;
};

export type DeleteManySerialTransferInput = {
  where?: Maybe<SerialTransferFilterFilter>;
};

export type DeleteManyServicesInput = {
  where?: Maybe<ServicesFilterFilter>;
};

export type DeleteManyTaxesAndCostsInput = {
  where?: Maybe<TaxesAndCostsFilterFilter>;
};

export type DeleteManyTaxesInput = {
  where?: Maybe<TaxesFilterFilter>;
};

export type DeleteManyThirdPartiesInput = {
  where?: Maybe<ThirdPartiesFilterFilter>;
};

export type DeleteManyThirdPartyClassificationInput = {
  where?: Maybe<ThirdPartyClassificationFilterFilter>;
};

export type DeleteManyTributaryInformationInput = {
  where?: Maybe<TributaryInformationFilterFilter>;
};

export type DeleteManyUnitMeasurementInput = {
  where?: Maybe<UnitMeasurementFilterFilter>;
};

export type DeleteManyUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
};

export type DeleteManyUserInput = {
  where?: Maybe<UserFilterFilter>;
};

export type DeleteManyUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
};

export type DeleteManyWarehouseInput = {
  where?: Maybe<WarehouseFilterFilter>;
};

export type DeleteMonetaryDenominationInput = {
  entityId: Scalars['ID'];
};

export type DeleteNotificationInput = {
  entityId: Scalars['ID'];
};

export type DeletePartialInventoryItemsInput = {
  entityId: Scalars['ID'];
};

export type DeletePartialTotalPhysicalInventoryInput = {
  entityId: Scalars['ID'];
};

export type DeletePaymentMethodInput = {
  entityId: Scalars['ID'];
};

export type DeletePreparationInput = {
  entityId: Scalars['ID'];
};

export type DeletePreparationTypeInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductAreaInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductCategoryInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductGroupInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductMenuInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductParamsInput = {
  entityId: Scalars['ID'];
};

export type DeleteProductSalePriceInput = {
  entityId: Scalars['ID'];
};

export type DeletePurchaseReturnsInput = {
  entityId: Scalars['ID'];
};

export type DeleteRegimeTypeInput = {
  entityId: Scalars['ID'];
};

export type DeleteRoleInput = {
  entityId: Scalars['ID'];
};

export type DeleteSerialInput = {
  entityId: Scalars['ID'];
};

export type DeleteSerialMovementInput = {
  entityId: Scalars['ID'];
};

export type DeleteSerialTransferInput = {
  entityId: Scalars['ID'];
};

export type DeleteServicesInput = {
  entityId: Scalars['ID'];
};

export type DeleteTaxesAndCostsInput = {
  entityId: Scalars['ID'];
};

export type DeleteTaxesInput = {
  entityId: Scalars['ID'];
};

export type DeleteTenantInput = {
  entityId: Scalars['ID'];
};

export type DeleteThirdPartiesInput = {
  entityId: Scalars['ID'];
};

export type DeleteThirdPartyClassificationInput = {
  entityId: Scalars['ID'];
};

export type DeleteTributaryInformationInput = {
  entityId: Scalars['ID'];
};

export type DeleteUnitMeasurementInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserAreaInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserInput = {
  entityId: Scalars['ID'];
};

export type DeleteUserPositionInput = {
  entityId: Scalars['ID'];
};

export type DeleteWarehouseInput = {
  entityId: Scalars['ID'];
};

export type EconomicActivitiesFilterFilter = {
  and?: Maybe<Array<EconomicActivitiesFilterFilter>>;
  or?: Maybe<Array<EconomicActivitiesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type EconomicActivitiesResponse = {
  id: Scalars['ID'];
  codeCiu: Scalars['Int'];
  codeActivity: Scalars['Int'];
  rate: Scalars['Int'];
  nameActivity?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EntityFieldsResponse = {
  field: Scalars['String'];
  value: Scalars['String'];
};

export enum FileStatus {
  Unused = 'UNUSED',
  Processing = 'PROCESSING',
  Ok = 'OK'
}

export enum FileStorageType {
  Aws = 'AWS',
  Local = 'LOCAL',
  Cloudinary = 'CLOUDINARY',
  Other = 'OTHER'
}

export type FilesFilterFilter = {
  and?: Maybe<Array<FilesFilterFilter>>;
  or?: Maybe<Array<FilesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  url?: Maybe<StringFieldComparison>;
  key?: Maybe<StringFieldComparison>;
  filename?: Maybe<StringFieldComparison>;
  bytes?: Maybe<StringFieldComparison>;
  storage?: Maybe<StringFieldComparison>;
  status?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FilesResponse = {
  id: Scalars['ID'];
  url: Scalars['String'];
  key: Scalars['String'];
  filename: Scalars['String'];
  bytes?: Maybe<Scalars['Float']>;
  storage: FileStorageType;
  status: FileStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FiscalResponsibilityFilterFilter = {
  and?: Maybe<Array<FiscalResponsibilityFilterFilter>>;
  or?: Maybe<Array<FiscalResponsibilityFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  codeDian?: Maybe<StringFieldComparison>;
  taxDescription?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type FiscalResponsibilityResponse = {
  id: Scalars['ID'];
  codeDian: Scalars['Int'];
  taxDescription?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
  redirectTo: Scalars['String'];
};

export type GenderFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<UserGender>;
  neq?: Maybe<UserGender>;
  gt?: Maybe<UserGender>;
  gte?: Maybe<UserGender>;
  lt?: Maybe<UserGender>;
  lte?: Maybe<UserGender>;
  like?: Maybe<UserGender>;
  notLike?: Maybe<UserGender>;
  iLike?: Maybe<UserGender>;
  notILike?: Maybe<UserGender>;
  in?: Maybe<Array<UserGender>>;
  notIn?: Maybe<Array<UserGender>>;
};

export type GetAllBanksInput = {
  where?: Maybe<BanksFilterFilter>;
  orderBy?: Maybe<OrderByBanksInput>;
};

export type GetAllBarCodeIdentifierInput = {
  where?: Maybe<BarCodeIdentifierFilterFilter>;
  orderBy?: Maybe<OrderByBarCodeIdentifierInput>;
};

export type GetAllBillingResolutionInput = {
  where?: Maybe<BillingResolutionFilterFilter>;
  orderBy?: Maybe<OrderByBillingResolutionInput>;
};

export type GetAllCompanyInput = {
  where?: Maybe<CompanyFilterFilter>;
  orderBy?: Maybe<OrderByCompanyInput>;
};

export type GetAllCompositionDecompositionInput = {
  where?: Maybe<CompositionDecompositionFilterFilter>;
  orderBy?: Maybe<OrderByCompositionDecompositionInput>;
};

export type GetAllCompositionInput = {
  where?: Maybe<CompositionFilterFilter>;
  orderBy?: Maybe<OrderByCompositionInput>;
};

export type GetAllCreditCardInput = {
  where?: Maybe<CreditCardFilterFilter>;
  orderBy?: Maybe<OrderByCreditCardInput>;
};

export type GetAllEconomicActivitiesInput = {
  where?: Maybe<EconomicActivitiesFilterFilter>;
  orderBy?: Maybe<OrderByEconomicActivitiesInput>;
};

export type GetAllFiscalResponsibilityInput = {
  where?: Maybe<FiscalResponsibilityFilterFilter>;
  orderBy?: Maybe<OrderByFiscalResponsibilityInput>;
};

export type GetAllGroupInput = {
  where?: Maybe<GroupFilterFilter>;
  orderBy?: Maybe<OrderByGroupInput>;
};

export type GetAllInitialPhysicalInventoryInput = {
  where?: Maybe<InitialPhysicalInventoryFilterFilter>;
  orderBy?: Maybe<OrderByInitialPhysicalInventoryInput>;
};

export type GetAllInventoryCovementConceptsInput = {
  where?: Maybe<InventoryCovementConceptsFilterFilter>;
  orderBy?: Maybe<OrderByInventoryCovementConceptsInput>;
};

export type GetAllInventoryMovementInput = {
  where?: Maybe<InventoryMovementFilterFilter>;
  orderBy?: Maybe<OrderByInventoryMovementInput>;
};

export type GetAllInventoryMovementItemsInput = {
  where?: Maybe<InventoryMovementItemsFilterFilter>;
  orderBy?: Maybe<OrderByInventoryMovementItemsInput>;
};

export type GetAllInventoryTransferInput = {
  where?: Maybe<InventoryTransferFilterFilter>;
  orderBy?: Maybe<OrderByInventoryTransferInput>;
};

export type GetAllInventoryTransferItemsInput = {
  where?: Maybe<InventoryTransferItemsFilterFilter>;
  orderBy?: Maybe<OrderByInventoryTransferItemsInput>;
};

export type GetAllMonetaryDenominationInput = {
  where?: Maybe<MonetaryDenominationFilterFilter>;
  orderBy?: Maybe<OrderByMonetaryDenominationInput>;
};

export type GetAllNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetAllPartialInventoryItemsInput = {
  where?: Maybe<PartialInventoryItemsFilterFilter>;
  orderBy?: Maybe<OrderByPartialInventoryItemsInput>;
};

export type GetAllPartialTotalPhysicalInventoryInput = {
  where?: Maybe<PartialTotalPhysicalInventoryFilterFilter>;
  orderBy?: Maybe<OrderByPartialTotalPhysicalInventoryInput>;
};

export type GetAllPaymentMethodInput = {
  where?: Maybe<PaymentMethodFilterFilter>;
  orderBy?: Maybe<OrderByPaymentMethodInput>;
};

export type GetAllPreparationInput = {
  where?: Maybe<PreparationFilterFilter>;
  orderBy?: Maybe<OrderByPreparationInput>;
};

export type GetAllPreparationTypeInput = {
  where?: Maybe<PreparationTypeFilterFilter>;
  orderBy?: Maybe<OrderByPreparationTypeInput>;
};

export type GetAllProductAreaInput = {
  where?: Maybe<ProductAreaFilterFilter>;
  orderBy?: Maybe<OrderByProductAreaInput>;
};

export type GetAllProductCategoryInput = {
  where?: Maybe<ProductCategoryFilterFilter>;
  orderBy?: Maybe<OrderByProductCategoryInput>;
};

export type GetAllProductGroupInput = {
  where?: Maybe<ProductGroupFilterFilter>;
  orderBy?: Maybe<OrderByProductGroupInput>;
};

export type GetAllProductInput = {
  where?: Maybe<ProductFilterFilter>;
  orderBy?: Maybe<OrderByProductInput>;
};

export type GetAllProductMenuInput = {
  where?: Maybe<ProductMenuFilterFilter>;
  orderBy?: Maybe<OrderByProductMenuInput>;
};

export type GetAllProductParamsInput = {
  where?: Maybe<ProductParamsFilterFilter>;
  orderBy?: Maybe<OrderByProductParamsInput>;
};

export type GetAllProductSalePriceInput = {
  where?: Maybe<ProductSalePriceFilterFilter>;
  orderBy?: Maybe<OrderByProductSalePriceInput>;
};

export type GetAllPurchaseReturnsInput = {
  where?: Maybe<PurchaseReturnsFilterFilter>;
  orderBy?: Maybe<OrderByPurchaseReturnsInput>;
};

export type GetAllRegimeTypeInput = {
  where?: Maybe<RegimeTypeFilterFilter>;
  orderBy?: Maybe<OrderByRegimeTypeInput>;
};

export type GetAllRoleInput = {
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
};

export type GetAllSerialInput = {
  where?: Maybe<SerialFilterFilter>;
  orderBy?: Maybe<OrderBySerialInput>;
};

export type GetAllSerialMovementInput = {
  where?: Maybe<SerialMovementFilterFilter>;
  orderBy?: Maybe<OrderBySerialMovementInput>;
};

export type GetAllSerialTransferInput = {
  where?: Maybe<SerialTransferFilterFilter>;
  orderBy?: Maybe<OrderBySerialTransferInput>;
};

export type GetAllServicesInput = {
  where?: Maybe<ServicesFilterFilter>;
  orderBy?: Maybe<OrderByServicesInput>;
};

export type GetAllTaxesAndCostsInput = {
  where?: Maybe<TaxesAndCostsFilterFilter>;
  orderBy?: Maybe<OrderByTaxesAndCostsInput>;
};

export type GetAllTaxesInput = {
  where?: Maybe<TaxesFilterFilter>;
  orderBy?: Maybe<OrderByTaxesInput>;
};

export type GetAllTenantsInput = {
  where?: Maybe<TenantFilterFilter>;
  orderBy?: Maybe<OrderByTenantInput>;
};

export type GetAllThirdPartiesInput = {
  where?: Maybe<ThirdPartiesFilterFilter>;
  orderBy?: Maybe<OrderByThirdPartiesInput>;
};

export type GetAllThirdPartyClassificationInput = {
  where?: Maybe<ThirdPartyClassificationFilterFilter>;
  orderBy?: Maybe<OrderByThirdPartyClassificationInput>;
};

export type GetAllTributaryInformationInput = {
  where?: Maybe<TributaryInformationFilterFilter>;
  orderBy?: Maybe<OrderByTributaryInformationInput>;
};

export type GetAllUnitMeasurementInput = {
  where?: Maybe<UnitMeasurementFilterFilter>;
  orderBy?: Maybe<OrderByUnitMeasurementInput>;
};

export type GetAllUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
  orderBy?: Maybe<OrderByUserAreaInput>;
};

export type GetAllUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
  orderBy?: Maybe<OrderByUserPositionInput>;
};

export type GetAllUsersInput = {
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetAllWarehouseInput = {
  where?: Maybe<WarehouseFilterFilter>;
  orderBy?: Maybe<OrderByWarehouseInput>;
};

export type GetOneBanksInput = {
  where?: Maybe<BanksFilterFilter>;
};

export type GetOneBarCodeIdentifierInput = {
  where?: Maybe<BarCodeIdentifierFilterFilter>;
};

export type GetOneBillingResolutionInput = {
  where?: Maybe<BillingResolutionFilterFilter>;
};

export type GetOneCompanyInput = {
  where?: Maybe<CompanyFilterFilter>;
};

export type GetOneCompositionDecompositionInput = {
  where?: Maybe<CompositionDecompositionFilterFilter>;
};

export type GetOneCompositionInput = {
  where?: Maybe<CompositionFilterFilter>;
};

export type GetOneCreditCardInput = {
  where?: Maybe<CreditCardFilterFilter>;
};

export type GetOneEconomicActivitiesInput = {
  where?: Maybe<EconomicActivitiesFilterFilter>;
};

export type GetOneFilesInput = {
  where?: Maybe<FilesFilterFilter>;
};

export type GetOneFiscalResponsibilityInput = {
  where?: Maybe<FiscalResponsibilityFilterFilter>;
};

export type GetOneGroupInput = {
  where?: Maybe<GroupFilterFilter>;
};

export type GetOneInitialPhysicalInventoryInput = {
  where?: Maybe<InitialPhysicalInventoryFilterFilter>;
};

export type GetOneInventoryCovementConceptsInput = {
  where?: Maybe<InventoryCovementConceptsFilterFilter>;
};

export type GetOneInventoryMovementInput = {
  where?: Maybe<InventoryMovementFilterFilter>;
};

export type GetOneInventoryMovementItemsInput = {
  where?: Maybe<InventoryMovementItemsFilterFilter>;
};

export type GetOneInventoryTransferInput = {
  where?: Maybe<InventoryTransferFilterFilter>;
};

export type GetOneInventoryTransferItemsInput = {
  where?: Maybe<InventoryTransferItemsFilterFilter>;
};

export type GetOneMonetaryDenominationInput = {
  where?: Maybe<MonetaryDenominationFilterFilter>;
};

export type GetOneNotificationInput = {
  where?: Maybe<NotificationFilterFilter>;
};

export type GetOnePartialInventoryItemsInput = {
  where?: Maybe<PartialInventoryItemsFilterFilter>;
};

export type GetOnePartialTotalPhysicalInventoryInput = {
  where?: Maybe<PartialTotalPhysicalInventoryFilterFilter>;
};

export type GetOnePaymentMethodInput = {
  where?: Maybe<PaymentMethodFilterFilter>;
};

export type GetOnePreparationInput = {
  where?: Maybe<PreparationFilterFilter>;
};

export type GetOnePreparationTypeInput = {
  where?: Maybe<PreparationTypeFilterFilter>;
};

export type GetOneProductAreaInput = {
  where?: Maybe<ProductAreaFilterFilter>;
};

export type GetOneProductCategoryInput = {
  where?: Maybe<ProductCategoryFilterFilter>;
};

export type GetOneProductGroupInput = {
  where?: Maybe<ProductGroupFilterFilter>;
};

export type GetOneProductInput = {
  where?: Maybe<ProductFilterFilter>;
};

export type GetOneProductMenuInput = {
  where?: Maybe<ProductMenuFilterFilter>;
};

export type GetOneProductParamsInput = {
  where?: Maybe<ProductParamsFilterFilter>;
};

export type GetOneProductSalePriceInput = {
  where?: Maybe<ProductSalePriceFilterFilter>;
};

export type GetOnePurchaseReturnsInput = {
  where?: Maybe<PurchaseReturnsFilterFilter>;
};

export type GetOneRegimeTypeInput = {
  where?: Maybe<RegimeTypeFilterFilter>;
};

export type GetOneRoleInput = {
  where?: Maybe<RoleFilterFilter>;
};

export type GetOneSerialInput = {
  where?: Maybe<SerialFilterFilter>;
};

export type GetOneSerialMovementInput = {
  where?: Maybe<SerialMovementFilterFilter>;
};

export type GetOneSerialTransferInput = {
  where?: Maybe<SerialTransferFilterFilter>;
};

export type GetOneServicesInput = {
  where?: Maybe<ServicesFilterFilter>;
};

export type GetOneTaxesAndCostsInput = {
  where?: Maybe<TaxesAndCostsFilterFilter>;
};

export type GetOneTaxesInput = {
  where?: Maybe<TaxesFilterFilter>;
};

export type GetOneTenantInput = {
  where?: Maybe<TenantFilterFilter>;
};

export type GetOneThirdPartiesInput = {
  where?: Maybe<ThirdPartiesFilterFilter>;
};

export type GetOneThirdPartyClassificationInput = {
  where?: Maybe<ThirdPartyClassificationFilterFilter>;
};

export type GetOneTributaryInformationInput = {
  where?: Maybe<TributaryInformationFilterFilter>;
};

export type GetOneUnitMeasurementInput = {
  where?: Maybe<UnitMeasurementFilterFilter>;
};

export type GetOneUserAreaInput = {
  where?: Maybe<UserAreaFilterFilter>;
};

export type GetOneUserInput = {
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetOneUserPositionInput = {
  where?: Maybe<UserPositionFilterFilter>;
};

export type GetOneWarehouseInput = {
  where?: Maybe<WarehouseFilterFilter>;
};

export type GetPaginatedBanksInput = {
  paginator: PaginatorParams;
  where?: Maybe<BanksFilterFilter>;
  orderBy?: Maybe<OrderByBanksInput>;
};

export type GetPaginatedBarCodeIdentifierInput = {
  paginator: PaginatorParams;
  where?: Maybe<BarCodeIdentifierFilterFilter>;
  orderBy?: Maybe<OrderByBarCodeIdentifierInput>;
};

export type GetPaginatedBillingResolutionInput = {
  paginator: PaginatorParams;
  where?: Maybe<BillingResolutionFilterFilter>;
  orderBy?: Maybe<OrderByBillingResolutionInput>;
};

export type GetPaginatedCompanyInput = {
  paginator: PaginatorParams;
  where?: Maybe<CompanyFilterFilter>;
  orderBy?: Maybe<OrderByCompanyInput>;
};

export type GetPaginatedCompositionDecompositionInput = {
  paginator: PaginatorParams;
  where?: Maybe<CompositionDecompositionFilterFilter>;
  orderBy?: Maybe<OrderByCompositionDecompositionInput>;
};

export type GetPaginatedCompositionInput = {
  paginator: PaginatorParams;
  where?: Maybe<CompositionFilterFilter>;
  orderBy?: Maybe<OrderByCompositionInput>;
};

export type GetPaginatedCreditCardInput = {
  paginator: PaginatorParams;
  where?: Maybe<CreditCardFilterFilter>;
  orderBy?: Maybe<OrderByCreditCardInput>;
};

export type GetPaginatedEconomicActivitiesInput = {
  paginator: PaginatorParams;
  where?: Maybe<EconomicActivitiesFilterFilter>;
  orderBy?: Maybe<OrderByEconomicActivitiesInput>;
};

export type GetPaginatedFilesInput = {
  paginator: PaginatorParams;
  where?: Maybe<FilesFilterFilter>;
  orderBy?: Maybe<OrderByFilesInput>;
};

export type GetPaginatedFiscalResponsibilityInput = {
  paginator: PaginatorParams;
  where?: Maybe<FiscalResponsibilityFilterFilter>;
  orderBy?: Maybe<OrderByFiscalResponsibilityInput>;
};

export type GetPaginatedGroupInput = {
  paginator: PaginatorParams;
  where?: Maybe<GroupFilterFilter>;
  orderBy?: Maybe<OrderByGroupInput>;
};

export type GetPaginatedInitialPhysicalInventoryInput = {
  paginator: PaginatorParams;
  where?: Maybe<InitialPhysicalInventoryFilterFilter>;
  orderBy?: Maybe<OrderByInitialPhysicalInventoryInput>;
};

export type GetPaginatedInventoryCovementConceptsInput = {
  paginator: PaginatorParams;
  where?: Maybe<InventoryCovementConceptsFilterFilter>;
  orderBy?: Maybe<OrderByInventoryCovementConceptsInput>;
};

export type GetPaginatedInventoryMovementInput = {
  paginator: PaginatorParams;
  where?: Maybe<InventoryMovementFilterFilter>;
  orderBy?: Maybe<OrderByInventoryMovementInput>;
};

export type GetPaginatedInventoryMovementItemsInput = {
  paginator: PaginatorParams;
  where?: Maybe<InventoryMovementItemsFilterFilter>;
  orderBy?: Maybe<OrderByInventoryMovementItemsInput>;
};

export type GetPaginatedInventoryTransferInput = {
  paginator: PaginatorParams;
  where?: Maybe<InventoryTransferFilterFilter>;
  orderBy?: Maybe<OrderByInventoryTransferInput>;
};

export type GetPaginatedInventoryTransferItemsInput = {
  paginator: PaginatorParams;
  where?: Maybe<InventoryTransferItemsFilterFilter>;
  orderBy?: Maybe<OrderByInventoryTransferItemsInput>;
};

export type GetPaginatedMonetaryDenominationInput = {
  paginator: PaginatorParams;
  where?: Maybe<MonetaryDenominationFilterFilter>;
  orderBy?: Maybe<OrderByMonetaryDenominationInput>;
};

export type GetPaginatedNotificationInput = {
  paginator: PaginatorParams;
  where?: Maybe<NotificationFilterFilter>;
  orderBy?: Maybe<OrderByNotificationInput>;
};

export type GetPaginatedPartialInventoryItemsInput = {
  paginator: PaginatorParams;
  where?: Maybe<PartialInventoryItemsFilterFilter>;
  orderBy?: Maybe<OrderByPartialInventoryItemsInput>;
};

export type GetPaginatedPartialTotalPhysicalInventoryInput = {
  paginator: PaginatorParams;
  where?: Maybe<PartialTotalPhysicalInventoryFilterFilter>;
  orderBy?: Maybe<OrderByPartialTotalPhysicalInventoryInput>;
};

export type GetPaginatedPaymentMethodInput = {
  paginator: PaginatorParams;
  where?: Maybe<PaymentMethodFilterFilter>;
  orderBy?: Maybe<OrderByPaymentMethodInput>;
};

export type GetPaginatedPreparationInput = {
  paginator: PaginatorParams;
  where?: Maybe<PreparationFilterFilter>;
  orderBy?: Maybe<OrderByPreparationInput>;
};

export type GetPaginatedPreparationTypeInput = {
  paginator: PaginatorParams;
  where?: Maybe<PreparationTypeFilterFilter>;
  orderBy?: Maybe<OrderByPreparationTypeInput>;
};

export type GetPaginatedProductAreaInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductAreaFilterFilter>;
  orderBy?: Maybe<OrderByProductAreaInput>;
};

export type GetPaginatedProductCategoryInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductCategoryFilterFilter>;
  orderBy?: Maybe<OrderByProductCategoryInput>;
};

export type GetPaginatedProductGroupInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductGroupFilterFilter>;
  orderBy?: Maybe<OrderByProductGroupInput>;
};

export type GetPaginatedProductInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductFilterFilter>;
  orderBy?: Maybe<OrderByProductInput>;
};

export type GetPaginatedProductMenuInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductMenuFilterFilter>;
  orderBy?: Maybe<OrderByProductMenuInput>;
};

export type GetPaginatedProductParamsInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductParamsFilterFilter>;
  orderBy?: Maybe<OrderByProductParamsInput>;
};

export type GetPaginatedProductSalePriceInput = {
  paginator: PaginatorParams;
  where?: Maybe<ProductSalePriceFilterFilter>;
  orderBy?: Maybe<OrderByProductSalePriceInput>;
};

export type GetPaginatedPurchaseReturnsInput = {
  paginator: PaginatorParams;
  where?: Maybe<PurchaseReturnsFilterFilter>;
  orderBy?: Maybe<OrderByPurchaseReturnsInput>;
};

export type GetPaginatedRegimeTypeInput = {
  paginator: PaginatorParams;
  where?: Maybe<RegimeTypeFilterFilter>;
  orderBy?: Maybe<OrderByRegimeTypeInput>;
};

export type GetPaginatedRoleInput = {
  paginator: PaginatorParams;
  where?: Maybe<RoleFilterFilter>;
  orderBy?: Maybe<OrderByRoleInput>;
};

export type GetPaginatedSerialInput = {
  paginator: PaginatorParams;
  where?: Maybe<SerialFilterFilter>;
  orderBy?: Maybe<OrderBySerialInput>;
};

export type GetPaginatedSerialMovementInput = {
  paginator: PaginatorParams;
  where?: Maybe<SerialMovementFilterFilter>;
  orderBy?: Maybe<OrderBySerialMovementInput>;
};

export type GetPaginatedSerialTransferInput = {
  paginator: PaginatorParams;
  where?: Maybe<SerialTransferFilterFilter>;
  orderBy?: Maybe<OrderBySerialTransferInput>;
};

export type GetPaginatedServicesInput = {
  paginator: PaginatorParams;
  where?: Maybe<ServicesFilterFilter>;
  orderBy?: Maybe<OrderByServicesInput>;
};

export type GetPaginatedTaxesAndCostsInput = {
  paginator: PaginatorParams;
  where?: Maybe<TaxesAndCostsFilterFilter>;
  orderBy?: Maybe<OrderByTaxesAndCostsInput>;
};

export type GetPaginatedTaxesInput = {
  paginator: PaginatorParams;
  where?: Maybe<TaxesFilterFilter>;
  orderBy?: Maybe<OrderByTaxesInput>;
};

export type GetPaginatedTenantInput = {
  paginator: PaginatorParams;
  where?: Maybe<TenantFilterFilter>;
  orderBy?: Maybe<OrderByTenantInput>;
};

export type GetPaginatedThirdPartiesInput = {
  paginator: PaginatorParams;
  where?: Maybe<ThirdPartiesFilterFilter>;
  orderBy?: Maybe<OrderByThirdPartiesInput>;
};

export type GetPaginatedThirdPartyClassificationInput = {
  paginator: PaginatorParams;
  where?: Maybe<ThirdPartyClassificationFilterFilter>;
  orderBy?: Maybe<OrderByThirdPartyClassificationInput>;
};

export type GetPaginatedTributaryInformationInput = {
  paginator: PaginatorParams;
  where?: Maybe<TributaryInformationFilterFilter>;
  orderBy?: Maybe<OrderByTributaryInformationInput>;
};

export type GetPaginatedUnitMeasurementInput = {
  paginator: PaginatorParams;
  where?: Maybe<UnitMeasurementFilterFilter>;
  orderBy?: Maybe<OrderByUnitMeasurementInput>;
};

export type GetPaginatedUserAreaInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserAreaFilterFilter>;
  orderBy?: Maybe<OrderByUserAreaInput>;
};

export type GetPaginatedUserPositionInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserPositionFilterFilter>;
  orderBy?: Maybe<OrderByUserPositionInput>;
};

export type GetPaginatedUsersInput = {
  paginator: PaginatorParams;
  where?: Maybe<UserFilterFilter>;
  orderBy?: Maybe<OrderByUserInput>;
};

export type GetPaginatedWarehouseInput = {
  paginator: PaginatorParams;
  where?: Maybe<WarehouseFilterFilter>;
  orderBy?: Maybe<OrderByWarehouseInput>;
};

export type GetUploadSignedUrlInput = {
  filename: Scalars['String'];
  contentType: Scalars['String'];
};

export type GraphQlFilterFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<ProfileFilterFilter>;
  neq?: Maybe<ProfileFilterFilter>;
  gt?: Maybe<ProfileFilterFilter>;
  gte?: Maybe<ProfileFilterFilter>;
  lt?: Maybe<ProfileFilterFilter>;
  lte?: Maybe<ProfileFilterFilter>;
  like?: Maybe<ProfileFilterFilter>;
  notLike?: Maybe<ProfileFilterFilter>;
  iLike?: Maybe<ProfileFilterFilter>;
  notILike?: Maybe<ProfileFilterFilter>;
  in?: Maybe<Array<ProfileFilterFilter>>;
  notIn?: Maybe<Array<ProfileFilterFilter>>;
};

export type GroupFilterFilter = {
  and?: Maybe<Array<GroupFilterFilter>>;
  or?: Maybe<Array<GroupFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type GroupResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  area?: Maybe<SolvedEntityResponse>;
  leader: SolvedEntityResponse;
  members: Array<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18nMessageResponse = {
  es: Scalars['String'];
  en: Scalars['String'];
  de?: Maybe<Scalars['String']>;
  pt?: Maybe<Scalars['String']>;
  it?: Maybe<Scalars['String']>;
  ru?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
};

export type IdFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['ID']>;
  neq?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  like?: Maybe<Scalars['ID']>;
  notLike?: Maybe<Scalars['ID']>;
  iLike?: Maybe<Scalars['ID']>;
  notILike?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
};

export enum IdentificationDocumentType {
  IdentificationCard = 'IDENTIFICATION_CARD',
  ForeignerId = 'FOREIGNER_ID',
  ForeignIdentificationDocument = 'FOREIGN_IDENTIFICATION_DOCUMENT',
  Nit = 'NIT',
  ForeignNit = 'FOREIGN_NIT',
  Nuip = 'NUIP',
  Passport = 'PASSPORT',
  CivilRegistration = 'CIVIL_REGISTRATION',
  ForeignCard = 'FOREIGN_CARD',
  IdentityCard = 'IDENTITY_CARD'
}

export type InitialPhysicalInventoryFilterFilter = {
  and?: Maybe<Array<InitialPhysicalInventoryFilterFilter>>;
  or?: Maybe<Array<InitialPhysicalInventoryFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InitialPhysicalInventoryResponse = {
  id: Scalars['ID'];
  currentquantity: Scalars['Float'];
  previousQuantity: Scalars['Float'];
  newQuantity: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitPrice: Scalars['Float'];
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<SolvedEntityResponse>;
  partialInventory?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InventoryCovementConceptsFilterFilter = {
  and?: Maybe<Array<InventoryCovementConceptsFilterFilter>>;
  or?: Maybe<Array<InventoryCovementConceptsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryCovementConceptsResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  valueType: ValueTypes;
  movementType: MovementType;
  requestThird: Scalars['Boolean'];
  loadAllProducts: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InventoryMovementFilterFilter = {
  and?: Maybe<Array<InventoryMovementFilterFilter>>;
  or?: Maybe<Array<InventoryMovementFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryMovementItemsFilterFilter = {
  and?: Maybe<Array<InventoryMovementItemsFilterFilter>>;
  or?: Maybe<Array<InventoryMovementItemsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryMovementItemsResponse = {
  id: Scalars['ID'];
  currentquantity: Scalars['Float'];
  previousQuantity: Scalars['Float'];
  newQuantity: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitPrice: Scalars['Float'];
  entry: Scalars['Float'];
  output: Scalars['Float'];
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<SolvedEntityResponse>;
  movementInventory?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InventoryMovementResponse = {
  id: Scalars['ID'];
  concepts?: Maybe<SolvedEntityResponse>;
  warehouse?: Maybe<SolvedEntityResponse>;
  third?: Maybe<SolvedEntityResponse>;
  movementDate: Scalars['DateTime'];
  settingNumber: Scalars['Int'];
  detail: Scalars['String'];
  movementStatus: MovementStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InventoryTransferFilterFilter = {
  and?: Maybe<Array<InventoryTransferFilterFilter>>;
  or?: Maybe<Array<InventoryTransferFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryTransferItemsFilterFilter = {
  and?: Maybe<Array<InventoryTransferItemsFilterFilter>>;
  or?: Maybe<Array<InventoryTransferItemsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type InventoryTransferItemsResponse = {
  id: Scalars['ID'];
  originQuantity: Scalars['Float'];
  totalTransfer: Scalars['Float'];
  originRestant: Scalars['Float'];
  destinationBalance: Scalars['Float'];
  transfer: Scalars['Float'];
  destinationBalanceTotal: Scalars['Float'];
  product?: Maybe<SolvedEntityResponse>;
  movementTransfer?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type InventoryTransferResponse = {
  id: Scalars['ID'];
  originWarehouse?: Maybe<SolvedEntityResponse>;
  destinationWarehouse?: Maybe<SolvedEntityResponse>;
  transfertDate: Scalars['DateTime'];
  transferNumber: Scalars['Int'];
  document: Scalars['String'];
  detail: Scalars['String'];
  transferStatus: TransferStatus;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type JwtAuthenticatedResponse = {
  user: AuthUserResponse;
  roles: Array<AuthRoleResponse>;
  providerData: AuthProviderDataResponse;
  access_token: Scalars['String'];
};

export type MonetaryDenominationFilterFilter = {
  and?: Maybe<Array<MonetaryDenominationFilterFilter>>;
  or?: Maybe<Array<MonetaryDenominationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type MonetaryDenominationResponse = {
  id: Scalars['ID'];
  value: Scalars['Float'];
  monetaryDenominationTypes: MonetaryDenominationTypes;
  photoFile?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum MonetaryDenominationTypes {
  Bill = 'BILL',
  Coin = 'COIN'
}

export enum MovementStatus {
  Confirmed = 'CONFIRMED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING'
}

export enum MovementType {
  Entries = 'ENTRIES',
  Outputs = 'OUTPUTS',
  EntriesAndOutputs = 'ENTRIES_AND_OUTPUTS',
  Returns = 'RETURNS'
}

export type Mutation = {
  createTenant?: Maybe<Scalars['Void']>;
  updateTenant?: Maybe<Scalars['Void']>;
  deleteTenant?: Maybe<Scalars['Void']>;
  createUser?: Maybe<Scalars['Void']>;
  updateUser?: Maybe<Scalars['Void']>;
  deleteUser?: Maybe<Scalars['Void']>;
  deleteManyUser?: Maybe<Scalars['Void']>;
  changePassword?: Maybe<Scalars['Void']>;
  resetPassword?: Maybe<Scalars['Void']>;
  updateMe?: Maybe<Scalars['Void']>;
  updateNotification?: Maybe<Scalars['Void']>;
  deleteNotification?: Maybe<Scalars['Void']>;
  deleteManyNotification?: Maybe<Scalars['Void']>;
  sendNotification?: Maybe<Scalars['Void']>;
  createRole?: Maybe<Scalars['Void']>;
  updateRole?: Maybe<Scalars['Void']>;
  deleteRole?: Maybe<Scalars['Void']>;
  deleteManyRole?: Maybe<Scalars['Void']>;
  createUserArea?: Maybe<Scalars['Void']>;
  updateUserArea?: Maybe<Scalars['Void']>;
  deleteUserArea?: Maybe<Scalars['Void']>;
  deleteManyUserArea?: Maybe<Scalars['Void']>;
  createUserPosition?: Maybe<Scalars['Void']>;
  updateUserPosition?: Maybe<Scalars['Void']>;
  deleteUserPosition?: Maybe<Scalars['Void']>;
  deleteManyUserPosition?: Maybe<Scalars['Void']>;
  signIn: JwtAuthenticatedResponse;
  signUp?: Maybe<Scalars['Void']>;
  confirmUser?: Maybe<Scalars['Void']>;
  forgotPassword?: Maybe<Scalars['Void']>;
  createUploadedFile?: Maybe<Scalars['Void']>;
  createFiles?: Maybe<Scalars['Void']>;
  updateFiles?: Maybe<Scalars['Void']>;
  deleteFiles?: Maybe<Scalars['Void']>;
  deleteManyFiles?: Maybe<Scalars['Void']>;
  createGroup?: Maybe<Scalars['Void']>;
  updateGroup?: Maybe<Scalars['Void']>;
  deleteGroup?: Maybe<Scalars['Void']>;
  deleteManyGroup?: Maybe<Scalars['Void']>;
  createWarehouse?: Maybe<Scalars['Void']>;
  updateWarehouse?: Maybe<Scalars['Void']>;
  deleteWarehouse?: Maybe<Scalars['Void']>;
  deleteManyWarehouse?: Maybe<Scalars['Void']>;
  createTaxes?: Maybe<Scalars['Void']>;
  updateTaxes?: Maybe<Scalars['Void']>;
  deleteTaxes?: Maybe<Scalars['Void']>;
  deleteManyTaxes?: Maybe<Scalars['Void']>;
  createCompany?: Maybe<Scalars['Void']>;
  updateCompany?: Maybe<Scalars['Void']>;
  deleteCompany?: Maybe<Scalars['Void']>;
  deleteManyCompany?: Maybe<Scalars['Void']>;
  createBarCodeIdentifier?: Maybe<Scalars['Void']>;
  updateBarCodeIdentifier?: Maybe<Scalars['Void']>;
  deleteBarCodeIdentifier?: Maybe<Scalars['Void']>;
  deleteManyBarCodeIdentifier?: Maybe<Scalars['Void']>;
  createBillingResolution?: Maybe<Scalars['Void']>;
  updateBillingResolution?: Maybe<Scalars['Void']>;
  deleteBillingResolution?: Maybe<Scalars['Void']>;
  deleteManyBillingResolution?: Maybe<Scalars['Void']>;
  createProduct?: Maybe<Scalars['Void']>;
  updateProduct?: Maybe<Scalars['Void']>;
  deleteProduct?: Maybe<Scalars['Void']>;
  deleteManyProduct?: Maybe<Scalars['Void']>;
  createProductMenu?: Maybe<Scalars['Void']>;
  updateProductMenu?: Maybe<Scalars['Void']>;
  deleteProductMenu?: Maybe<Scalars['Void']>;
  deleteManyProductMenu?: Maybe<Scalars['Void']>;
  createProductArea?: Maybe<Scalars['Void']>;
  updateProductArea?: Maybe<Scalars['Void']>;
  deleteProductArea?: Maybe<Scalars['Void']>;
  deleteManyProductArea?: Maybe<Scalars['Void']>;
  createProductParams?: Maybe<Scalars['Void']>;
  updateProductParams?: Maybe<Scalars['Void']>;
  deleteProductParams?: Maybe<Scalars['Void']>;
  deleteManyProductParams?: Maybe<Scalars['Void']>;
  createProductGroup?: Maybe<Scalars['Void']>;
  updateProductGroup?: Maybe<Scalars['Void']>;
  deleteProductGroup?: Maybe<Scalars['Void']>;
  deleteManyProductGroup?: Maybe<Scalars['Void']>;
  createTaxesAndCosts?: Maybe<Scalars['Void']>;
  updateTaxesAndCosts?: Maybe<Scalars['Void']>;
  deleteTaxesAndCosts?: Maybe<Scalars['Void']>;
  deleteManyTaxesAndCosts?: Maybe<Scalars['Void']>;
  createComposition?: Maybe<Scalars['Void']>;
  updateComposition?: Maybe<Scalars['Void']>;
  deleteComposition?: Maybe<Scalars['Void']>;
  deleteManyComposition?: Maybe<Scalars['Void']>;
  createProductSalePrice?: Maybe<Scalars['Void']>;
  updateProductSalePrice?: Maybe<Scalars['Void']>;
  deleteProductSalePrice?: Maybe<Scalars['Void']>;
  deleteManyProductSalePrice?: Maybe<Scalars['Void']>;
  createPreparationType?: Maybe<Scalars['Void']>;
  updatePreparationType?: Maybe<Scalars['Void']>;
  deletePreparationType?: Maybe<Scalars['Void']>;
  deleteManyPreparationType?: Maybe<Scalars['Void']>;
  createPreparation?: Maybe<Scalars['Void']>;
  updatePreparation?: Maybe<Scalars['Void']>;
  deletePreparation?: Maybe<Scalars['Void']>;
  deleteManyPreparation?: Maybe<Scalars['Void']>;
  createUnitMeasurement?: Maybe<Scalars['Void']>;
  updateUnitMeasurement?: Maybe<Scalars['Void']>;
  deleteUnitMeasurement?: Maybe<Scalars['Void']>;
  deleteManyUnitMeasurement?: Maybe<Scalars['Void']>;
  createProductCategory?: Maybe<Scalars['Void']>;
  updateProductCategory?: Maybe<Scalars['Void']>;
  deleteProductCategory?: Maybe<Scalars['Void']>;
  deleteManyProductCategory?: Maybe<Scalars['Void']>;
  createServices?: Maybe<Scalars['Void']>;
  updateServices?: Maybe<Scalars['Void']>;
  deleteServices?: Maybe<Scalars['Void']>;
  deleteManyServices?: Maybe<Scalars['Void']>;
  createPartialTotalPhysicalInventory?: Maybe<Scalars['Void']>;
  updatePartialTotalPhysicalInventory?: Maybe<Scalars['Void']>;
  deletePartialTotalPhysicalInventory?: Maybe<Scalars['Void']>;
  deleteManyPartialTotalPhysicalInventory?: Maybe<Scalars['Void']>;
  createPartialInventoryItems?: Maybe<Scalars['Void']>;
  updatePartialInventoryItems?: Maybe<Scalars['Void']>;
  deletePartialInventoryItems?: Maybe<Scalars['Void']>;
  deleteManyPartialInventoryItems?: Maybe<Scalars['Void']>;
  createInitialPhysicalInventory?: Maybe<Scalars['Void']>;
  updateInitialPhysicalInventory?: Maybe<Scalars['Void']>;
  deleteInitialPhysicalInventory?: Maybe<Scalars['Void']>;
  deleteManyInitialPhysicalInventory?: Maybe<Scalars['Void']>;
  createInventoryCovementConcepts?: Maybe<Scalars['Void']>;
  updateInventoryCovementConcepts?: Maybe<Scalars['Void']>;
  deleteInventoryCovementConcepts?: Maybe<Scalars['Void']>;
  deleteManyInventoryCovementConcepts?: Maybe<Scalars['Void']>;
  createInventoryMovement?: Maybe<Scalars['Void']>;
  updateInventoryMovement?: Maybe<Scalars['Void']>;
  deleteInventoryMovement?: Maybe<Scalars['Void']>;
  deleteManyInventoryMovement?: Maybe<Scalars['Void']>;
  createInventoryMovementItems?: Maybe<Scalars['Void']>;
  updateInventoryMovementItems?: Maybe<Scalars['Void']>;
  deleteInventoryMovementItems?: Maybe<Scalars['Void']>;
  deleteManyInventoryMovementItems?: Maybe<Scalars['Void']>;
  createSerialMovement?: Maybe<Scalars['Void']>;
  updateSerialMovement?: Maybe<Scalars['Void']>;
  deleteSerialMovement?: Maybe<Scalars['Void']>;
  deleteManySerialMovement?: Maybe<Scalars['Void']>;
  createInventoryTransfer?: Maybe<Scalars['Void']>;
  updateInventoryTransfer?: Maybe<Scalars['Void']>;
  deleteInventoryTransfer?: Maybe<Scalars['Void']>;
  deleteManyInventoryTransfer?: Maybe<Scalars['Void']>;
  createInventoryTransferItems?: Maybe<Scalars['Void']>;
  updateInventoryTransferItems?: Maybe<Scalars['Void']>;
  deleteInventoryTransferItems?: Maybe<Scalars['Void']>;
  deleteManyInventoryTransferItems?: Maybe<Scalars['Void']>;
  createSerialTransfer?: Maybe<Scalars['Void']>;
  updateSerialTransfer?: Maybe<Scalars['Void']>;
  deleteSerialTransfer?: Maybe<Scalars['Void']>;
  deleteManySerialTransfer?: Maybe<Scalars['Void']>;
  createPaymentMethod?: Maybe<Scalars['Void']>;
  updatePaymentMethod?: Maybe<Scalars['Void']>;
  deletePaymentMethod?: Maybe<Scalars['Void']>;
  deleteManyPaymentMethod?: Maybe<Scalars['Void']>;
  createCreditCard?: Maybe<Scalars['Void']>;
  updateCreditCard?: Maybe<Scalars['Void']>;
  deleteCreditCard?: Maybe<Scalars['Void']>;
  deleteManyCreditCard?: Maybe<Scalars['Void']>;
  createBanks?: Maybe<Scalars['Void']>;
  updateBanks?: Maybe<Scalars['Void']>;
  deleteBanks?: Maybe<Scalars['Void']>;
  deleteManyBanks?: Maybe<Scalars['Void']>;
  createThirdParties?: Maybe<Scalars['Void']>;
  updateThirdParties?: Maybe<Scalars['Void']>;
  deleteThirdParties?: Maybe<Scalars['Void']>;
  deleteManyThirdParties?: Maybe<Scalars['Void']>;
  createThirdPartyClassification?: Maybe<Scalars['Void']>;
  updateThirdPartyClassification?: Maybe<Scalars['Void']>;
  deleteThirdPartyClassification?: Maybe<Scalars['Void']>;
  deleteManyThirdPartyClassification?: Maybe<Scalars['Void']>;
  createRegimeType?: Maybe<Scalars['Void']>;
  updateRegimeType?: Maybe<Scalars['Void']>;
  deleteRegimeType?: Maybe<Scalars['Void']>;
  deleteManyRegimeType?: Maybe<Scalars['Void']>;
  createEconomicActivities?: Maybe<Scalars['Void']>;
  updateEconomicActivities?: Maybe<Scalars['Void']>;
  deleteEconomicActivities?: Maybe<Scalars['Void']>;
  deleteManyEconomicActivities?: Maybe<Scalars['Void']>;
  createFiscalResponsibility?: Maybe<Scalars['Void']>;
  updateFiscalResponsibility?: Maybe<Scalars['Void']>;
  deleteFiscalResponsibility?: Maybe<Scalars['Void']>;
  deleteManyFiscalResponsibility?: Maybe<Scalars['Void']>;
  createTributaryInformation?: Maybe<Scalars['Void']>;
  updateTributaryInformation?: Maybe<Scalars['Void']>;
  deleteTributaryInformation?: Maybe<Scalars['Void']>;
  deleteManyTributaryInformation?: Maybe<Scalars['Void']>;
  createSerial?: Maybe<Scalars['Void']>;
  updateSerial?: Maybe<Scalars['Void']>;
  deleteSerial?: Maybe<Scalars['Void']>;
  deleteManySerial?: Maybe<Scalars['Void']>;
  createPurchaseReturns?: Maybe<Scalars['Void']>;
  updatePurchaseReturns?: Maybe<Scalars['Void']>;
  deletePurchaseReturns?: Maybe<Scalars['Void']>;
  deleteManyPurchaseReturns?: Maybe<Scalars['Void']>;
  createMonetaryDenomination?: Maybe<Scalars['Void']>;
  updateMonetaryDenomination?: Maybe<Scalars['Void']>;
  deleteMonetaryDenomination?: Maybe<Scalars['Void']>;
  deleteManyMonetaryDenomination?: Maybe<Scalars['Void']>;
  createCompositionDecomposition?: Maybe<Scalars['Void']>;
  updateCompositionDecomposition?: Maybe<Scalars['Void']>;
  deleteCompositionDecomposition?: Maybe<Scalars['Void']>;
  deleteManyCompositionDecomposition?: Maybe<Scalars['Void']>;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationUpdateTenantArgs = {
  input: UpdateTenantInput;
};


export type MutationDeleteTenantArgs = {
  input: DeleteTenantInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteManyUserArgs = {
  input: DeleteManyUserInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationUpdateMeArgs = {
  input: UpdateMeInput;
};


export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};


export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};


export type MutationDeleteManyNotificationArgs = {
  input: DeleteManyNotificationInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteManyRoleArgs = {
  input: DeleteManyRoleInput;
};


export type MutationCreateUserAreaArgs = {
  input: CreateUserAreaInput;
};


export type MutationUpdateUserAreaArgs = {
  input: UpdateUserAreaInput;
};


export type MutationDeleteUserAreaArgs = {
  input: DeleteUserAreaInput;
};


export type MutationDeleteManyUserAreaArgs = {
  input: DeleteManyUserAreaInput;
};


export type MutationCreateUserPositionArgs = {
  input: CreateUserPositionInput;
};


export type MutationUpdateUserPositionArgs = {
  input: UpdateUserPositionInput;
};


export type MutationDeleteUserPositionArgs = {
  input: DeleteUserPositionInput;
};


export type MutationDeleteManyUserPositionArgs = {
  input: DeleteManyUserPositionInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationCreateUploadedFileArgs = {
  input: CreateUploadedFileInput;
};


export type MutationCreateFilesArgs = {
  input: CreateFilesInput;
};


export type MutationUpdateFilesArgs = {
  input: UpdateFilesInput;
};


export type MutationDeleteFilesArgs = {
  input: DeleteFilesInput;
};


export type MutationDeleteManyFilesArgs = {
  input: DeleteManyFilesInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationDeleteGroupArgs = {
  input: DeleteGroupInput;
};


export type MutationDeleteManyGroupArgs = {
  input: DeleteManyGroupInput;
};


export type MutationCreateWarehouseArgs = {
  input: CreateWarehouseInput;
};


export type MutationUpdateWarehouseArgs = {
  input: UpdateWarehouseInput;
};


export type MutationDeleteWarehouseArgs = {
  input: DeleteWarehouseInput;
};


export type MutationDeleteManyWarehouseArgs = {
  input: DeleteManyWarehouseInput;
};


export type MutationCreateTaxesArgs = {
  input: CreateTaxesInput;
};


export type MutationUpdateTaxesArgs = {
  input: UpdateTaxesInput;
};


export type MutationDeleteTaxesArgs = {
  input: DeleteTaxesInput;
};


export type MutationDeleteManyTaxesArgs = {
  input: DeleteManyTaxesInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};


export type MutationDeleteManyCompanyArgs = {
  input: DeleteManyCompanyInput;
};


export type MutationCreateBarCodeIdentifierArgs = {
  input: CreateBarCodeIdentifierInput;
};


export type MutationUpdateBarCodeIdentifierArgs = {
  input: UpdateBarCodeIdentifierInput;
};


export type MutationDeleteBarCodeIdentifierArgs = {
  input: DeleteBarCodeIdentifierInput;
};


export type MutationDeleteManyBarCodeIdentifierArgs = {
  input: DeleteManyBarCodeIdentifierInput;
};


export type MutationCreateBillingResolutionArgs = {
  input: CreateBillingResolutionInput;
};


export type MutationUpdateBillingResolutionArgs = {
  input: UpdateBillingResolutionInput;
};


export type MutationDeleteBillingResolutionArgs = {
  input: DeleteBillingResolutionInput;
};


export type MutationDeleteManyBillingResolutionArgs = {
  input: DeleteManyBillingResolutionInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


export type MutationDeleteManyProductArgs = {
  input: DeleteManyProductInput;
};


export type MutationCreateProductMenuArgs = {
  input: CreateProductMenuInput;
};


export type MutationUpdateProductMenuArgs = {
  input: UpdateProductMenuInput;
};


export type MutationDeleteProductMenuArgs = {
  input: DeleteProductMenuInput;
};


export type MutationDeleteManyProductMenuArgs = {
  input: DeleteManyProductMenuInput;
};


export type MutationCreateProductAreaArgs = {
  input: CreateProductAreaInput;
};


export type MutationUpdateProductAreaArgs = {
  input: UpdateProductAreaInput;
};


export type MutationDeleteProductAreaArgs = {
  input: DeleteProductAreaInput;
};


export type MutationDeleteManyProductAreaArgs = {
  input: DeleteManyProductAreaInput;
};


export type MutationCreateProductParamsArgs = {
  input: CreateProductParamsInput;
};


export type MutationUpdateProductParamsArgs = {
  input: UpdateProductParamsInput;
};


export type MutationDeleteProductParamsArgs = {
  input: DeleteProductParamsInput;
};


export type MutationDeleteManyProductParamsArgs = {
  input: DeleteManyProductParamsInput;
};


export type MutationCreateProductGroupArgs = {
  input: CreateProductGroupInput;
};


export type MutationUpdateProductGroupArgs = {
  input: UpdateProductGroupInput;
};


export type MutationDeleteProductGroupArgs = {
  input: DeleteProductGroupInput;
};


export type MutationDeleteManyProductGroupArgs = {
  input: DeleteManyProductGroupInput;
};


export type MutationCreateTaxesAndCostsArgs = {
  input: CreateTaxesAndCostsInput;
};


export type MutationUpdateTaxesAndCostsArgs = {
  input: UpdateTaxesAndCostsInput;
};


export type MutationDeleteTaxesAndCostsArgs = {
  input: DeleteTaxesAndCostsInput;
};


export type MutationDeleteManyTaxesAndCostsArgs = {
  input: DeleteManyTaxesAndCostsInput;
};


export type MutationCreateCompositionArgs = {
  input: CreateCompositionInput;
};


export type MutationUpdateCompositionArgs = {
  input: UpdateCompositionInput;
};


export type MutationDeleteCompositionArgs = {
  input: DeleteCompositionInput;
};


export type MutationDeleteManyCompositionArgs = {
  input: DeleteManyCompositionInput;
};


export type MutationCreateProductSalePriceArgs = {
  input: CreateProductSalePriceInput;
};


export type MutationUpdateProductSalePriceArgs = {
  input: UpdateProductSalePriceInput;
};


export type MutationDeleteProductSalePriceArgs = {
  input: DeleteProductSalePriceInput;
};


export type MutationDeleteManyProductSalePriceArgs = {
  input: DeleteManyProductSalePriceInput;
};


export type MutationCreatePreparationTypeArgs = {
  input: CreatePreparationTypeInput;
};


export type MutationUpdatePreparationTypeArgs = {
  input: UpdatePreparationTypeInput;
};


export type MutationDeletePreparationTypeArgs = {
  input: DeletePreparationTypeInput;
};


export type MutationDeleteManyPreparationTypeArgs = {
  input: DeleteManyPreparationTypeInput;
};


export type MutationCreatePreparationArgs = {
  input: CreatePreparationInput;
};


export type MutationUpdatePreparationArgs = {
  input: UpdatePreparationInput;
};


export type MutationDeletePreparationArgs = {
  input: DeletePreparationInput;
};


export type MutationDeleteManyPreparationArgs = {
  input: DeleteManyPreparationInput;
};


export type MutationCreateUnitMeasurementArgs = {
  input: CreateUnitMeasurementInput;
};


export type MutationUpdateUnitMeasurementArgs = {
  input: UpdateUnitMeasurementInput;
};


export type MutationDeleteUnitMeasurementArgs = {
  input: DeleteUnitMeasurementInput;
};


export type MutationDeleteManyUnitMeasurementArgs = {
  input: DeleteManyUnitMeasurementInput;
};


export type MutationCreateProductCategoryArgs = {
  input: CreateProductCategoryInput;
};


export type MutationUpdateProductCategoryArgs = {
  input: UpdateProductCategoryInput;
};


export type MutationDeleteProductCategoryArgs = {
  input: DeleteProductCategoryInput;
};


export type MutationDeleteManyProductCategoryArgs = {
  input: DeleteManyProductCategoryInput;
};


export type MutationCreateServicesArgs = {
  input: CreateServicesInput;
};


export type MutationUpdateServicesArgs = {
  input: UpdateServicesInput;
};


export type MutationDeleteServicesArgs = {
  input: DeleteServicesInput;
};


export type MutationDeleteManyServicesArgs = {
  input: DeleteManyServicesInput;
};


export type MutationCreatePartialTotalPhysicalInventoryArgs = {
  input: CreatePartialTotalPhysicalInventoryInput;
};


export type MutationUpdatePartialTotalPhysicalInventoryArgs = {
  input: UpdatePartialTotalPhysicalInventoryInput;
};


export type MutationDeletePartialTotalPhysicalInventoryArgs = {
  input: DeletePartialTotalPhysicalInventoryInput;
};


export type MutationDeleteManyPartialTotalPhysicalInventoryArgs = {
  input: DeleteManyPartialTotalPhysicalInventoryInput;
};


export type MutationCreatePartialInventoryItemsArgs = {
  input: CreatePartialInventoryItemsInput;
};


export type MutationUpdatePartialInventoryItemsArgs = {
  input: UpdatePartialInventoryItemsInput;
};


export type MutationDeletePartialInventoryItemsArgs = {
  input: DeletePartialInventoryItemsInput;
};


export type MutationDeleteManyPartialInventoryItemsArgs = {
  input: DeleteManyPartialInventoryItemsInput;
};


export type MutationCreateInitialPhysicalInventoryArgs = {
  input: CreateInitialPhysicalInventoryInput;
};


export type MutationUpdateInitialPhysicalInventoryArgs = {
  input: UpdateInitialPhysicalInventoryInput;
};


export type MutationDeleteInitialPhysicalInventoryArgs = {
  input: DeleteInitialPhysicalInventoryInput;
};


export type MutationDeleteManyInitialPhysicalInventoryArgs = {
  input: DeleteManyInitialPhysicalInventoryInput;
};


export type MutationCreateInventoryCovementConceptsArgs = {
  input: CreateInventoryCovementConceptsInput;
};


export type MutationUpdateInventoryCovementConceptsArgs = {
  input: UpdateInventoryCovementConceptsInput;
};


export type MutationDeleteInventoryCovementConceptsArgs = {
  input: DeleteInventoryCovementConceptsInput;
};


export type MutationDeleteManyInventoryCovementConceptsArgs = {
  input: DeleteManyInventoryCovementConceptsInput;
};


export type MutationCreateInventoryMovementArgs = {
  input: CreateInventoryMovementInput;
};


export type MutationUpdateInventoryMovementArgs = {
  input: UpdateInventoryMovementInput;
};


export type MutationDeleteInventoryMovementArgs = {
  input: DeleteInventoryMovementInput;
};


export type MutationDeleteManyInventoryMovementArgs = {
  input: DeleteManyInventoryMovementInput;
};


export type MutationCreateInventoryMovementItemsArgs = {
  input: CreateInventoryMovementItemsInput;
};


export type MutationUpdateInventoryMovementItemsArgs = {
  input: UpdateInventoryMovementItemsInput;
};


export type MutationDeleteInventoryMovementItemsArgs = {
  input: DeleteInventoryMovementItemsInput;
};


export type MutationDeleteManyInventoryMovementItemsArgs = {
  input: DeleteManyInventoryMovementItemsInput;
};


export type MutationCreateSerialMovementArgs = {
  input: CreateSerialMovementInput;
};


export type MutationUpdateSerialMovementArgs = {
  input: UpdateSerialMovementInput;
};


export type MutationDeleteSerialMovementArgs = {
  input: DeleteSerialMovementInput;
};


export type MutationDeleteManySerialMovementArgs = {
  input: DeleteManySerialMovementInput;
};


export type MutationCreateInventoryTransferArgs = {
  input: CreateInventoryTransferInput;
};


export type MutationUpdateInventoryTransferArgs = {
  input: UpdateInventoryTransferInput;
};


export type MutationDeleteInventoryTransferArgs = {
  input: DeleteInventoryTransferInput;
};


export type MutationDeleteManyInventoryTransferArgs = {
  input: DeleteManyInventoryTransferInput;
};


export type MutationCreateInventoryTransferItemsArgs = {
  input: CreateInventoryTransferItemsInput;
};


export type MutationUpdateInventoryTransferItemsArgs = {
  input: UpdateInventoryTransferItemsInput;
};


export type MutationDeleteInventoryTransferItemsArgs = {
  input: DeleteInventoryTransferItemsInput;
};


export type MutationDeleteManyInventoryTransferItemsArgs = {
  input: DeleteManyInventoryTransferItemsInput;
};


export type MutationCreateSerialTransferArgs = {
  input: CreateSerialTransferInput;
};


export type MutationUpdateSerialTransferArgs = {
  input: UpdateSerialTransferInput;
};


export type MutationDeleteSerialTransferArgs = {
  input: DeleteSerialTransferInput;
};


export type MutationDeleteManySerialTransferArgs = {
  input: DeleteManySerialTransferInput;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};


export type MutationDeletePaymentMethodArgs = {
  input: DeletePaymentMethodInput;
};


export type MutationDeleteManyPaymentMethodArgs = {
  input: DeleteManyPaymentMethodInput;
};


export type MutationCreateCreditCardArgs = {
  input: CreateCreditCardInput;
};


export type MutationUpdateCreditCardArgs = {
  input: UpdateCreditCardInput;
};


export type MutationDeleteCreditCardArgs = {
  input: DeleteCreditCardInput;
};


export type MutationDeleteManyCreditCardArgs = {
  input: DeleteManyCreditCardInput;
};


export type MutationCreateBanksArgs = {
  input: CreateBanksInput;
};


export type MutationUpdateBanksArgs = {
  input: UpdateBanksInput;
};


export type MutationDeleteBanksArgs = {
  input: DeleteBanksInput;
};


export type MutationDeleteManyBanksArgs = {
  input: DeleteManyBanksInput;
};


export type MutationCreateThirdPartiesArgs = {
  input: CreateThirdPartiesInput;
};


export type MutationUpdateThirdPartiesArgs = {
  input: UpdateThirdPartiesInput;
};


export type MutationDeleteThirdPartiesArgs = {
  input: DeleteThirdPartiesInput;
};


export type MutationDeleteManyThirdPartiesArgs = {
  input: DeleteManyThirdPartiesInput;
};


export type MutationCreateThirdPartyClassificationArgs = {
  input: CreateThirdPartyClassificationInput;
};


export type MutationUpdateThirdPartyClassificationArgs = {
  input: UpdateThirdPartyClassificationInput;
};


export type MutationDeleteThirdPartyClassificationArgs = {
  input: DeleteThirdPartyClassificationInput;
};


export type MutationDeleteManyThirdPartyClassificationArgs = {
  input: DeleteManyThirdPartyClassificationInput;
};


export type MutationCreateRegimeTypeArgs = {
  input: CreateRegimeTypeInput;
};


export type MutationUpdateRegimeTypeArgs = {
  input: UpdateRegimeTypeInput;
};


export type MutationDeleteRegimeTypeArgs = {
  input: DeleteRegimeTypeInput;
};


export type MutationDeleteManyRegimeTypeArgs = {
  input: DeleteManyRegimeTypeInput;
};


export type MutationCreateEconomicActivitiesArgs = {
  input: CreateEconomicActivitiesInput;
};


export type MutationUpdateEconomicActivitiesArgs = {
  input: UpdateEconomicActivitiesInput;
};


export type MutationDeleteEconomicActivitiesArgs = {
  input: DeleteEconomicActivitiesInput;
};


export type MutationDeleteManyEconomicActivitiesArgs = {
  input: DeleteManyEconomicActivitiesInput;
};


export type MutationCreateFiscalResponsibilityArgs = {
  input: CreateFiscalResponsibilityInput;
};


export type MutationUpdateFiscalResponsibilityArgs = {
  input: UpdateFiscalResponsibilityInput;
};


export type MutationDeleteFiscalResponsibilityArgs = {
  input: DeleteFiscalResponsibilityInput;
};


export type MutationDeleteManyFiscalResponsibilityArgs = {
  input: DeleteManyFiscalResponsibilityInput;
};


export type MutationCreateTributaryInformationArgs = {
  input: CreateTributaryInformationInput;
};


export type MutationUpdateTributaryInformationArgs = {
  input: UpdateTributaryInformationInput;
};


export type MutationDeleteTributaryInformationArgs = {
  input: DeleteTributaryInformationInput;
};


export type MutationDeleteManyTributaryInformationArgs = {
  input: DeleteManyTributaryInformationInput;
};


export type MutationCreateSerialArgs = {
  input: CreateSerialInput;
};


export type MutationUpdateSerialArgs = {
  input: UpdateSerialInput;
};


export type MutationDeleteSerialArgs = {
  input: DeleteSerialInput;
};


export type MutationDeleteManySerialArgs = {
  input: DeleteManySerialInput;
};


export type MutationCreatePurchaseReturnsArgs = {
  input: CreatePurchaseReturnsInput;
};


export type MutationUpdatePurchaseReturnsArgs = {
  input: UpdatePurchaseReturnsInput;
};


export type MutationDeletePurchaseReturnsArgs = {
  input: DeletePurchaseReturnsInput;
};


export type MutationDeleteManyPurchaseReturnsArgs = {
  input: DeleteManyPurchaseReturnsInput;
};


export type MutationCreateMonetaryDenominationArgs = {
  input: CreateMonetaryDenominationInput;
};


export type MutationUpdateMonetaryDenominationArgs = {
  input: UpdateMonetaryDenominationInput;
};


export type MutationDeleteMonetaryDenominationArgs = {
  input: DeleteMonetaryDenominationInput;
};


export type MutationDeleteManyMonetaryDenominationArgs = {
  input: DeleteManyMonetaryDenominationInput;
};


export type MutationCreateCompositionDecompositionArgs = {
  input: CreateCompositionDecompositionInput;
};


export type MutationUpdateCompositionDecompositionArgs = {
  input: UpdateCompositionDecompositionInput;
};


export type MutationDeleteCompositionDecompositionArgs = {
  input: DeleteCompositionDecompositionInput;
};


export type MutationDeleteManyCompositionDecompositionArgs = {
  input: DeleteManyCompositionDecompositionInput;
};

export type NotificationFilterFilter = {
  and?: Maybe<Array<NotificationFilterFilter>>;
  or?: Maybe<Array<NotificationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  type?: Maybe<NotificationTypeFilterComparison>;
  isRead?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type NotificationResponse = {
  id: Scalars['ID'];
  message?: Maybe<I18nMessageResponse>;
  type?: Maybe<NotificationType>;
  isRead?: Maybe<Scalars['Boolean']>;
  toUser?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum NotificationType {
  ReactionPost = 'REACTION_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionProject = 'REACTION_PROJECT',
  ReactionProjectComment = 'REACTION_PROJECT_COMMENT',
  ResponseComment = 'RESPONSE_COMMENT',
  CommentPost = 'COMMENT_POST',
  CommentProject = 'COMMENT_PROJECT',
  ForgotPassword = 'FORGOT_PASSWORD',
  Internal = 'INTERNAL',
  TicketCreated = 'TICKET_CREATED',
  TicketResponse = 'TICKET_RESPONSE',
  CalendarEventInvited = 'CALENDAR_EVENT_INVITED',
  CalendarEventUpdated = 'CALENDAR_EVENT_UPDATED',
  CalendarEventDeleted = 'CALENDAR_EVENT_DELETED',
  CreatedCourse = 'CREATED_COURSE',
  CreatedProject = 'CREATED_PROJECT',
  CreatedCertification = 'CREATED_CERTIFICATION',
  CreatedLessonComment = 'CREATED_LESSON_COMMENT',
  FinishLesson = 'FINISH_LESSON',
  ApprovalFinalExam = 'APPROVAL_FINAL_EXAM',
  ApprovalQuiz = 'APPROVAL_QUIZ',
  DisapprovalFinalExam = 'DISAPPROVAL_FINAL_EXAM',
  DisapprovalQuiz = 'DISAPPROVAL_QUIZ',
  TranscodeError = 'TRANSCODE_ERROR',
  TranscodeSuccess = 'TRANSCODE_SUCCESS'
}

export type NotificationTypeFilterComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<NotificationType>;
  neq?: Maybe<NotificationType>;
  gt?: Maybe<NotificationType>;
  gte?: Maybe<NotificationType>;
  lt?: Maybe<NotificationType>;
  lte?: Maybe<NotificationType>;
  like?: Maybe<NotificationType>;
  notLike?: Maybe<NotificationType>;
  iLike?: Maybe<NotificationType>;
  notILike?: Maybe<NotificationType>;
  in?: Maybe<Array<NotificationType>>;
  notIn?: Maybe<Array<NotificationType>>;
};

export type OrderByBanksInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByBarCodeIdentifierInput = {
  code?: Maybe<OrderByType>;
  price?: Maybe<OrderByType>;
  currency?: Maybe<OrderByType>;
  quantity?: Maybe<OrderByType>;
  identifier?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByBillingResolutionInput = {
  resolutionNumber?: Maybe<OrderByType>;
  prefix?: Maybe<OrderByType>;
  initialNumber?: Maybe<OrderByType>;
  finalNumber?: Maybe<OrderByType>;
  from?: Maybe<OrderByType>;
  to?: Maybe<OrderByType>;
  resolutionClass?: Maybe<OrderByType>;
  resolutionType?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByCompanyInput = {
  name?: Maybe<OrderByType>;
  country?: Maybe<OrderByType>;
  city?: Maybe<OrderByType>;
  webSite?: Maybe<OrderByType>;
  address?: Maybe<OrderByType>;
  phoneNumber?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
  nit?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByCompositionDecompositionInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByCompositionInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByCreditCardInput = {
  name?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByEconomicActivitiesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByFilesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByFiscalResponsibilityInput = {
  codeDian?: Maybe<OrderByType>;
  taxDescription?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByGroupInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInitialPhysicalInventoryInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInventoryCovementConceptsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInventoryMovementInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInventoryMovementItemsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInventoryTransferInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByInventoryTransferItemsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByMonetaryDenominationInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByNotificationInput = {
  type?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPartialInventoryItemsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPartialTotalPhysicalInventoryInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPaymentMethodInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPreparationInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPreparationTypeInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductAreaInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductCategoryInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductGroupInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductMenuInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductParamsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByProductSalePriceInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByPurchaseReturnsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByRegimeTypeInput = {
  name?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByRoleInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderBySerialInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderBySerialMovementInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderBySerialTransferInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByServicesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTaxesAndCostsInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTaxesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  tax?: Maybe<OrderByType>;
  taxType?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTenantInput = {
  id?: Maybe<OrderByType>;
  updatedAt?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
  code?: Maybe<OrderByType>;
  name?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
};

export type OrderByThirdPartiesInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByThirdPartyClassificationInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByTributaryInformationInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export enum OrderByType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByUnitMeasurementInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByUserAreaInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByUserInput = {
  id?: Maybe<OrderByType>;
  updatedAt?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
  email?: Maybe<OrderByType>;
  username?: Maybe<OrderByType>;
  firstname?: Maybe<OrderByType>;
  lastname?: Maybe<OrderByType>;
  lastLogin?: Maybe<OrderByType>;
};

export type OrderByUserPositionInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export type OrderByWarehouseInput = {
  name?: Maybe<OrderByType>;
  description?: Maybe<OrderByType>;
  location?: Maybe<OrderByType>;
  code?: Maybe<OrderByType>;
  createdAt?: Maybe<OrderByType>;
};

export enum Provider {
  Local = 'LOCAL',
  Google = 'GOOGLE'
}

export type PaginatedBanksResponse = {
  items: Array<BanksResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedBarCodeIdentifierResponse = {
  items: Array<BarCodeIdentifierResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedBillingResolutionResponse = {
  items: Array<BillingResolutionResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedCompanyResponse = {
  items: Array<CompanyResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedCompositionDecompositionResponse = {
  items: Array<CompositionDecompositionResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedCompositionResponse = {
  items: Array<CompositionResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedCreditCardResponse = {
  items: Array<CreditCardResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedEconomicActivitiesResponse = {
  items: Array<EconomicActivitiesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedFilesResponse = {
  items: Array<FilesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedFiscalResponsibilityResponse = {
  items: Array<FiscalResponsibilityResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedGroupResponse = {
  items: Array<GroupResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInitialPhysicalInventoryResponse = {
  items: Array<InitialPhysicalInventoryResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInventoryCovementConceptsResponse = {
  items: Array<InventoryCovementConceptsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInventoryMovementItemsResponse = {
  items: Array<InventoryMovementItemsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInventoryMovementResponse = {
  items: Array<InventoryMovementResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInventoryTransferItemsResponse = {
  items: Array<InventoryTransferItemsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedInventoryTransferResponse = {
  items: Array<InventoryTransferResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedMonetaryDenominationResponse = {
  items: Array<MonetaryDenominationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedNotificationResponse = {
  items: Array<NotificationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPartialInventoryItemsResponse = {
  items: Array<PartialInventoryItemsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPartialTotalPhysicalInventoryResponse = {
  items: Array<PartialTotalPhysicalInventoryResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPaymentMethodResponse = {
  items: Array<PaymentMethodResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPreparationResponse = {
  items: Array<PreparationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPreparationTypeResponse = {
  items: Array<PreparationTypeResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductAreaResponse = {
  items: Array<ProductAreaResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductCategoryResponse = {
  items: Array<ProductCategoryResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductGroupResponse = {
  items: Array<ProductGroupResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductMenuResponse = {
  items: Array<ProductMenuResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductParamsResponse = {
  items: Array<ProductParamsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductResponse = {
  items: Array<ProductResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedProductSalePriceResponse = {
  items: Array<ProductSalePriceResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedPurchaseReturnsResponse = {
  items: Array<PurchaseReturnsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedRegimeTypeResponse = {
  items: Array<RegimeTypeResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedRoleResponse = {
  items: Array<RoleResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedSerialMovementResponse = {
  items: Array<SerialMovementResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedSerialResponse = {
  items: Array<SerialResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedSerialTransferResponse = {
  items: Array<SerialTransferResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedServicesResponse = {
  items: Array<ServicesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTaxesAndCostsResponse = {
  items: Array<TaxesAndCostsResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTaxesResponse = {
  items: Array<TaxesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTenantResponse = {
  items: Array<TenantResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedThirdPartiesResponse = {
  items: Array<ThirdPartiesResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedThirdPartyClassificationResponse = {
  items: Array<ThirdPartyClassificationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedTributaryInformationResponse = {
  items: Array<TributaryInformationResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUnitMeasurementResponse = {
  items: Array<UnitMeasurementResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUserAreaResponse = {
  items: Array<UserAreaResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUserPositionResponse = {
  items: Array<UserPositionResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedUsers = {
  items: Array<UserResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatedWarehouseResponse = {
  items: Array<WarehouseResponse>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
  limit: Scalars['Int'];
  currentPage: Scalars['Int'];
};

export type PaginatorParams = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PartialBanksInput = {
  name?: Maybe<Scalars['String']>;
  accountingAccount?: Maybe<Scalars['Int']>;
};

export type PartialBarCodeIdentifierInput = {
  code?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  identifier?: Maybe<BarCodeIdentifier>;
  barCodeFormat?: Maybe<BarCodeFormat>;
  warehouse?: Maybe<Scalars['ID']>;
  company?: Maybe<Scalars['ID']>;
};

export type PartialBillingResolutionInput = {
  resolutionNumber?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  initialNumber?: Maybe<Scalars['Int']>;
  finalNumber?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  resolutionClass?: Maybe<ResolutionClass>;
  resolutionType?: Maybe<ResolutionType>;
  localBilling?: Maybe<Scalars['Boolean']>;
};

export type PartialCompanyInput = {
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  photoFile?: Maybe<Scalars['ID']>;
  contact?: Maybe<Scalars['ID']>;
};

export type PartialCompositionDecompositionInput = {
  warehouse?: Maybe<Scalars['ID']>;
  userAdmin?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
  compositionType?: Maybe<CompositionType>;
  code?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type PartialCompositionInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  um?: Maybe<Scalars['ID']>;
  area?: Maybe<Scalars['ID']>;
  photoFile?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Scalars['ID']>>;
  compound?: Maybe<Scalars['Boolean']>;
};

export type PartialCreditCardInput = {
  name?: Maybe<Scalars['String']>;
  commission?: Maybe<Scalars['Float']>;
  photoFile?: Maybe<Scalars['ID']>;
};

export type PartialEconomicActivitiesInput = {
  codeCiu?: Maybe<Scalars['Int']>;
  codeActivity?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Int']>;
  nameActivity?: Maybe<Scalars['String']>;
};

export type PartialFilesInput = {
  url?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  bytes?: Maybe<Scalars['Float']>;
  storage?: Maybe<FileStorageType>;
  status?: Maybe<FileStatus>;
};

export type PartialFiscalResponsibilityInput = {
  codeDian?: Maybe<Scalars['Int']>;
  taxDescription?: Maybe<Scalars['String']>;
};

export type PartialGroupInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  leader?: Maybe<Scalars['ID']>;
  members?: Maybe<Array<Scalars['ID']>>;
};

export type PartialInitialPhysicalInventoryInput = {
  currentquantity?: Maybe<Scalars['Float']>;
  previousQuantity?: Maybe<Scalars['Float']>;
  newQuantity?: Maybe<Scalars['Float']>;
  unitCost?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  partialInventory?: Maybe<Scalars['ID']>;
};

export type PartialInventoryCovementConceptsInput = {
  name?: Maybe<Scalars['String']>;
  requestThird?: Maybe<Scalars['Boolean']>;
  loadAllProducts?: Maybe<Scalars['Boolean']>;
  valueType?: Maybe<ValueTypes>;
  movementType?: Maybe<MovementType>;
};

export type PartialInventoryItemsFilterFilter = {
  and?: Maybe<Array<PartialInventoryItemsFilterFilter>>;
  or?: Maybe<Array<PartialInventoryItemsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PartialInventoryItemsResponse = {
  id: Scalars['ID'];
  currentquantity: Scalars['Float'];
  previousQuantity: Scalars['Float'];
  newQuantity: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitPrice: Scalars['Float'];
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<SolvedEntityResponse>;
  partialInventory?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PartialInventoryMovementInput = {
  concepts?: Maybe<Scalars['ID']>;
  warehouse?: Maybe<Scalars['ID']>;
  third?: Maybe<Scalars['ID']>;
  settingNumber?: Maybe<Scalars['Int']>;
  detail?: Maybe<Scalars['String']>;
  movementDate?: Maybe<Scalars['DateTime']>;
  movementStatus?: Maybe<MovementStatus>;
};

export type PartialInventoryMovementItemsInput = {
  currentquantity?: Maybe<Scalars['Float']>;
  previousQuantity?: Maybe<Scalars['Float']>;
  newQuantity?: Maybe<Scalars['Float']>;
  unitCost?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  entry?: Maybe<Scalars['Float']>;
  output?: Maybe<Scalars['Float']>;
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  movementInventory?: Maybe<Scalars['ID']>;
};

export type PartialInventoryTransferInput = {
  originWarehouse?: Maybe<Scalars['ID']>;
  destinationWarehouse?: Maybe<Scalars['ID']>;
  transfertDate?: Maybe<Scalars['DateTime']>;
  transferNumber?: Maybe<Scalars['Int']>;
  document?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  transferStatus?: Maybe<TransferStatus>;
};

export type PartialInventoryTransferItemsInput = {
  originQuantity?: Maybe<Scalars['Float']>;
  totalTransfer?: Maybe<Scalars['Float']>;
  originRestant?: Maybe<Scalars['Float']>;
  destinationBalance?: Maybe<Scalars['Float']>;
  transfer?: Maybe<Scalars['Float']>;
  destinationBalanceTotal?: Maybe<Scalars['Float']>;
  movementTransfer?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
};

export type PartialMonetaryDenominationInput = {
  value?: Maybe<Scalars['Float']>;
  photoFile?: Maybe<Scalars['ID']>;
  monetaryDenominationTypes?: Maybe<MonetaryDenominationTypes>;
};

export type PartialNotificationInput = {
  isRead?: Maybe<Scalars['Boolean']>;
};

export type PartialPartialInventoryItemsInput = {
  currentquantity?: Maybe<Scalars['Float']>;
  previousQuantity?: Maybe<Scalars['Float']>;
  newQuantity?: Maybe<Scalars['Float']>;
  unitCost?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
  barCode?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  partialInventory?: Maybe<Scalars['ID']>;
};

export type PartialPartialTotalPhysicalInventoryInput = {
  detail?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  warehouse?: Maybe<Scalars['ID']>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
};

export type PartialPaymentMethodInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  cashOnHand?: Maybe<Scalars['Boolean']>;
  credit?: Maybe<Scalars['Boolean']>;
  divideIntoInstallments?: Maybe<Scalars['Boolean']>;
  paycheck?: Maybe<Scalars['Boolean']>;
  deferPayment?: Maybe<Scalars['Boolean']>;
  days?: Maybe<Scalars['Int']>;
  accounting?: Maybe<Accounting>;
  alwaysLinkedWith?: Maybe<AlwaysLinkedWith>;
  accountingAccount?: Maybe<Scalars['String']>;
  askBank?: Maybe<Scalars['Boolean']>;
  askBoucherNumber?: Maybe<Scalars['Boolean']>;
  askDocumentDate?: Maybe<Scalars['Boolean']>;
  askCardType?: Maybe<Scalars['Boolean']>;
  paymentMethodDian?: Maybe<Scalars['ID']>;
  paymentMethodDianType?: Maybe<PaymentMethodDianType>;
  administersDominicilios?: Maybe<Scalars['Boolean']>;
  administersBonuses?: Maybe<Scalars['Boolean']>;
  administersAdvanceReservationsOrders?: Maybe<Scalars['Boolean']>;
  affectVouchersConsignmentsThirds?: Maybe<Scalars['Boolean']>;
  showIva?: Maybe<Scalars['Boolean']>;
  iva?: Maybe<Scalars['ID']>;
  confirmReturns?: Maybe<Scalars['Boolean']>;
  confirmCreditCut?: Maybe<Scalars['Boolean']>;
  photoFile?: Maybe<Scalars['ID']>;
};

export type PartialPermitsInput = {
  module?: Maybe<App_Modules>;
  action?: Maybe<Action_List>;
};

export type PartialPreparationInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PartialPreparationTypeInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  preparation?: Maybe<Array<Scalars['ID']>>;
};

export type PartialProductAreaInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  attentionArea?: Maybe<Scalars['Boolean']>;
};

export type PartialProductCategoryInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PartialProductGroupInput = {
  name?: Maybe<Scalars['String']>;
  sortingToOrders?: Maybe<Scalars['Boolean']>;
  source?: Maybe<Scalars['String']>;
  tipInOrder?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['ID']>>;
  warehouses?: Maybe<Array<Scalars['ID']>>;
  taxAppliedToPurchases?: Maybe<Array<Scalars['ID']>>;
  taxAppliedToSales?: Maybe<Array<Scalars['ID']>>;
  timeTax?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialProductInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  compound?: Maybe<Scalars['Boolean']>;
  shoppingAssistant?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  um?: Maybe<Scalars['ID']>;
  area?: Maybe<Scalars['ID']>;
  composition?: Maybe<Scalars['ID']>;
  photoFile?: Maybe<Scalars['ID']>;
  barCode?: Maybe<Array<Scalars['ID']>>;
  groups?: Maybe<Array<Scalars['ID']>>;
};

export type PartialProductMenuInput = {
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
};

export type PartialProductParamsInput = {
  updatePriceInInvoice?: Maybe<Scalars['Boolean']>;
  belongsToWarehouse?: Maybe<Scalars['Boolean']>;
  releaseToMenu?: Maybe<Scalars['Boolean']>;
  invoicePriceRangeFrom?: Maybe<Scalars['Float']>;
  invoicePriceRangeTo?: Maybe<Scalars['Float']>;
  maxDiscount?: Maybe<Scalars['Int']>;
  maxStock?: Maybe<Scalars['Int']>;
  minStock?: Maybe<Scalars['Int']>;
  replenishIn?: Maybe<Scalars['String']>;
  additional?: Maybe<Scalars['String']>;
  unitPoints?: Maybe<Scalars['String']>;
  warehouse?: Maybe<Scalars['ID']>;
  attentionTimeServiceOrders?: Maybe<Scalars['String']>;
  calculatePriceInvoicePercentage?: Maybe<Scalars['String']>;
  pointsPerUnit?: Maybe<Scalars['String']>;
  menu?: Maybe<Scalars['ID']>;
  product?: Maybe<Scalars['ID']>;
  options?: Maybe<Array<Scalars['String']>>;
  gourmetQualify?: Maybe<Array<Scalars['String']>>;
  productWithPreparation?: Maybe<Scalars['Boolean']>;
  preparationType?: Maybe<Scalars['ID']>;
  inventoryAccount?: Maybe<Scalars['String']>;
  salesAccount?: Maybe<Scalars['String']>;
  costSaleAccount?: Maybe<Scalars['String']>;
  fixedAsset?: Maybe<Scalars['Boolean']>;
};

export type PartialProductSalePriceInput = {
  product?: Maybe<Scalars['ID']>;
  generalValueTax?: Maybe<Scalars['ID']>;
  generalValue?: Maybe<Scalars['Float']>;
  generalUtilityValue?: Maybe<Scalars['Float']>;
  ncTax?: Maybe<Scalars['ID']>;
  commission?: Maybe<Scalars['Float']>;
  specialOneValueTax?: Maybe<Scalars['ID']>;
  specialOneValue?: Maybe<Scalars['Float']>;
  specialOneUtilityValue?: Maybe<Scalars['Float']>;
  specialTwoValueTax?: Maybe<Scalars['ID']>;
  specialTwoValue?: Maybe<Scalars['Float']>;
  specialTwoUtilityValue?: Maybe<Scalars['Float']>;
};

export type PartialProfileInput = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['ID']>;
};

export type PartialPurchaseReturnsInput = {
  thirdSupplier?: Maybe<Scalars['ID']>;
  purchase?: Maybe<Scalars['ID']>;
  purchaseReturnsNumber?: Maybe<Scalars['Float']>;
  purchaseReturnsDate?: Maybe<Scalars['DateTime']>;
  purchaseDateNow?: Maybe<Scalars['DateTime']>;
  totalPurchaseReturnsValue?: Maybe<Scalars['Float']>;
  subTotalPurchaseReturnsValue?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  otherTaxes?: Maybe<Scalars['Float']>;
  reference?: Maybe<Scalars['String']>;
  purchaseReturnsStatus?: Maybe<PurchaseReturnsStatus>;
  taxes?: Maybe<Array<Scalars['ID']>>;
  details?: Maybe<Scalars['String']>;
};

export type PartialRegimeTypeInput = {
  name?: Maybe<Scalars['String']>;
};

export type PartialRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permits?: Maybe<Array<PartialPermitsInput>>;
};

export type PartialSerialInput = {
  serial?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
};

export type PartialSerialMovementInput = {
  serial?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  movementInventory?: Maybe<Scalars['ID']>;
};

export type PartialSerialTransferInput = {
  serial?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['ID']>;
  transferInventory?: Maybe<Scalars['ID']>;
};

export type PartialServicesInput = {
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  iva?: Maybe<Scalars['ID']>;
  um?: Maybe<Scalars['ID']>;
  area?: Maybe<Scalars['ID']>;
  groups?: Maybe<Array<Scalars['ID']>>;
  cost?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  ultCost?: Maybe<Scalars['Boolean']>;
  loadOrderScreen?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialTaxesAndCostsInput = {
  product?: Maybe<Scalars['ID']>;
  shoppingTax?: Maybe<Scalars['ID']>;
  applyIco?: Maybe<Scalars['Boolean']>;
  valueIco?: Maybe<Scalars['Float']>;
  includeIcoInCost?: Maybe<Scalars['Boolean']>;
  productCost?: Maybe<Scalars['Float']>;
  unitCost?: Maybe<Scalars['Float']>;
  unitTaxCost?: Maybe<Scalars['ID']>;
  valueUnitTaxCost?: Maybe<Scalars['Float']>;
  totalUnitCost?: Maybe<Scalars['Float']>;
  volumePrice?: Maybe<Array<Scalars['String']>>;
};

export type PartialTaxesInput = {
  name?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  taxType?: Maybe<Array<TaxType>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialTenantInput = {
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  info?: Maybe<TenantInfoInput>;
};

export type PartialThirdPartiesInput = {
  identificationDocument?: Maybe<Scalars['String']>;
  verificationDigit?: Maybe<Scalars['String']>;
  identificationDocumentType?: Maybe<IdentificationDocumentType>;
  personType?: Maybe<PersonType>;
  barCode?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstSurname?: Maybe<Scalars['String']>;
  secondSurname?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  tradename?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  secondPhoneNumber?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  thirdPartyClassification?: Maybe<Scalars['ID']>;
  nationality?: Maybe<Scalars['String']>;
  regime?: Maybe<RegimeType>;
  isClient?: Maybe<Scalars['Boolean']>;
  isEmployee?: Maybe<Scalars['Boolean']>;
  isSupplier?: Maybe<Scalars['Boolean']>;
  isOtherSellers?: Maybe<Scalars['Boolean']>;
  isPosBilling?: Maybe<Scalars['Boolean']>;
  photoFile?: Maybe<Scalars['ID']>;
  assignDebtQuota?: Maybe<Scalars['Boolean']>;
  debtQuota?: Maybe<Scalars['String']>;
  isSetPrices?: Maybe<Scalars['Boolean']>;
  priceType?: Maybe<PriceType>;
  isActive?: Maybe<Scalars['Boolean']>;
  enablePoints?: Maybe<Scalars['Boolean']>;
  baseRetention?: Maybe<Scalars['String']>;
  percentageRetention?: Maybe<Scalars['Float']>;
  seller?: Maybe<Scalars['ID']>;
  products?: Maybe<Array<Scalars['ID']>>;
  restrictPaymentMethod?: Maybe<Scalars['Boolean']>;
  restrictAllPaymentMethod?: Maybe<Scalars['Boolean']>;
  paymentMethod?: Maybe<Array<Scalars['ID']>>;
};

export type PartialThirdPartyClassificationInput = {
  name?: Maybe<Scalars['String']>;
  assignDebtQuota?: Maybe<Scalars['Boolean']>;
  debtQuota?: Maybe<Scalars['Float']>;
  gourmetConnection?: Maybe<Scalars['Boolean']>;
  includeServiceOrders?: Maybe<Scalars['Boolean']>;
};

export type PartialTotalPhysicalInventoryFilterFilter = {
  and?: Maybe<Array<PartialTotalPhysicalInventoryFilterFilter>>;
  or?: Maybe<Array<PartialTotalPhysicalInventoryFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PartialTotalPhysicalInventoryResponse = {
  id: Scalars['ID'];
  detail: Scalars['String'];
  number: Scalars['Float'];
  warehouse?: Maybe<SolvedEntityResponse>;
  isConfirmed: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PartialTributaryInformationInput = {
  third?: Maybe<Scalars['ID']>;
  regimeType?: Maybe<Scalars['ID']>;
  economicActivities?: Maybe<Scalars['ID']>;
  retention?: Maybe<Retention>;
  registrationNumber?: Maybe<Scalars['Int']>;
  taxDetail?: Maybe<Array<Scalars['ID']>>;
  fiscalResponsibility?: Maybe<Array<Scalars['ID']>>;
};

export type PartialUnitMeasurementInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PartialUserAreaInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialUserInput = {
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['ID']>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type PartialUserPositionInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartialWarehouseInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  warehouseTypes?: Maybe<WarehouseTypes>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export enum PaymentMethodDianType {
  Credito = 'CREDITO',
  Debit = 'DEBIT'
}

export type PaymentMethodFilterFilter = {
  and?: Maybe<Array<PaymentMethodFilterFilter>>;
  or?: Maybe<Array<PaymentMethodFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PaymentMethodResponse = {
  name: Scalars['String'];
  code: Scalars['String'];
  cashOnHand: Scalars['Boolean'];
  credit: Scalars['Boolean'];
  divideIntoInstallments: Scalars['Boolean'];
  paycheck: Scalars['Boolean'];
  deferPayment: Scalars['Boolean'];
  days: Scalars['Int'];
  accounting: Accounting;
  alwaysLinkedWith: AlwaysLinkedWith;
  accountingAccount: Scalars['String'];
  askBank: Scalars['Boolean'];
  askBoucherNumber: Scalars['Boolean'];
  askDocumentDate: Scalars['Boolean'];
  askCardType: Scalars['Boolean'];
  paymentMethodDian?: Maybe<SolvedEntityResponse>;
  paymentMethodDianType: PaymentMethodDianType;
  administersDominicilios: Scalars['Boolean'];
  administersBonuses: Scalars['Boolean'];
  administersAdvanceReservationsOrders: Scalars['Boolean'];
  affectVouchersConsignmentsThirds: Scalars['Boolean'];
  showIva: Scalars['Boolean'];
  iva?: Maybe<SolvedEntityResponse>;
  confirmReturns: Scalars['Boolean'];
  confirmCreditCut: Scalars['Boolean'];
  photoFile?: Maybe<CloudFileResponse>;
};

export type PermitsInput = {
  module: App_Modules;
  action: Action_List;
};

export type PermitsResponse = {
  module: App_Modules;
  action: Action_List;
};

export enum PersonType {
  NaturalPerson = 'NATURAL_PERSON',
  LegalPerson = 'LEGAL_PERSON'
}

export type PreparationFilterFilter = {
  and?: Maybe<Array<PreparationFilterFilter>>;
  or?: Maybe<Array<PreparationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PreparationResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PreparationTypeFilterFilter = {
  and?: Maybe<Array<PreparationTypeFilterFilter>>;
  or?: Maybe<Array<PreparationTypeFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PreparationTypeResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  preparation: Array<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PriceType {
  NormalPrice = 'NORMAL_PRICE',
  SpecialPriceOne = 'SPECIAL_PRICE_ONE',
  SpecialPriceTwo = 'SPECIAL_PRICE_TWO',
  CostLastPurchase = 'COST_LAST_PURCHASE'
}

export type ProductAreaFilterFilter = {
  and?: Maybe<Array<ProductAreaFilterFilter>>;
  or?: Maybe<Array<ProductAreaFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductAreaResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  attentionArea: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryFilterFilter = {
  and?: Maybe<Array<ProductCategoryFilterFilter>>;
  or?: Maybe<Array<ProductCategoryFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductCategoryResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductFilterFilter = {
  and?: Maybe<Array<ProductFilterFilter>>;
  or?: Maybe<Array<ProductFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductGroupFilterFilter = {
  and?: Maybe<Array<ProductGroupFilterFilter>>;
  or?: Maybe<Array<ProductGroupFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductGroupResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  sortingToOrders: Scalars['Boolean'];
  source: Scalars['String'];
  tipInOrder: Scalars['Boolean'];
  categories: Array<SolvedEntityResponse>;
  warehouses: Array<SolvedEntityResponse>;
  taxAppliedToPurchases: Array<SolvedEntityResponse>;
  taxAppliedToSales: Array<SolvedEntityResponse>;
  timeTax?: Maybe<Scalars['Boolean']>;
  from?: Maybe<Scalars['DateTime']>;
  to?: Maybe<Scalars['DateTime']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMenuFilterFilter = {
  and?: Maybe<Array<ProductMenuFilterFilter>>;
  or?: Maybe<Array<ProductMenuFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductMenuResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  product: SolvedEntityResponse;
  products?: Maybe<Array<SolvedEntityResponse>>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductParamsFilterFilter = {
  and?: Maybe<Array<ProductParamsFilterFilter>>;
  or?: Maybe<Array<ProductParamsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  updatePriceInInvoice?: Maybe<StringFieldComparison>;
  belongsToWarehouse?: Maybe<StringFieldComparison>;
  releaseToMenu?: Maybe<StringFieldComparison>;
  invoicePriceRangeFrom?: Maybe<StringFieldComparison>;
  invoicePriceRangeTo?: Maybe<StringFieldComparison>;
  maxDiscount?: Maybe<StringFieldComparison>;
  maxStock?: Maybe<StringFieldComparison>;
  minStock?: Maybe<StringFieldComparison>;
  replenishIn?: Maybe<StringFieldComparison>;
  additional?: Maybe<StringFieldComparison>;
  unitPoints?: Maybe<StringFieldComparison>;
  warehouse?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  attentionTimeServiceOrders?: Maybe<StringFieldComparison>;
  calculatePriceInvoicePercentage?: Maybe<StringFieldComparison>;
  pointsPerUnit?: Maybe<StringFieldComparison>;
  menu?: Maybe<StringFieldComparison>;
  product?: Maybe<StringFieldComparison>;
  options?: Maybe<StringFieldComparison>;
  gourmetQualify?: Maybe<StringFieldComparison>;
  productWithPreparation?: Maybe<StringFieldComparison>;
  inventoryAccount?: Maybe<StringFieldComparison>;
  salesAccount?: Maybe<StringFieldComparison>;
  costSaleAccount?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductParamsResponse = {
  id: Scalars['ID'];
  updatePriceInInvoice: Scalars['Boolean'];
  belongsToWarehouse: Scalars['Boolean'];
  releaseToMenu: Scalars['Boolean'];
  invoicePriceRangeFrom?: Maybe<Scalars['Float']>;
  invoicePriceRangeTo?: Maybe<Scalars['Float']>;
  maxDiscount?: Maybe<Scalars['Float']>;
  maxStock?: Maybe<Scalars['Float']>;
  minStock?: Maybe<Scalars['Float']>;
  replenishIn?: Maybe<Scalars['String']>;
  additional?: Maybe<Scalars['String']>;
  unitPoints?: Maybe<Scalars['String']>;
  attentionTimeServiceOrders?: Maybe<Scalars['String']>;
  calculatePriceInvoicePercentage?: Maybe<Scalars['String']>;
  pointsPerUnit?: Maybe<Scalars['String']>;
  warehouse?: Maybe<SolvedEntityResponse>;
  menu?: Maybe<SolvedEntityResponse>;
  product?: Maybe<SolvedEntityResponse>;
  options: Array<Scalars['String']>;
  gourmetQualify: Array<Scalars['String']>;
  productWithPreparation: Scalars['Boolean'];
  preparationType?: Maybe<SolvedEntityResponse>;
  inventoryAccount?: Maybe<Scalars['String']>;
  salesAccount?: Maybe<Scalars['String']>;
  costSaleAccount?: Maybe<Scalars['String']>;
  fixedAsset: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  menuId?: Maybe<Array<SolvedEntityResponse>>;
};

export type ProductResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ref: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  shoppingAssistant: Scalars['Boolean'];
  compound?: Maybe<Scalars['Boolean']>;
  um?: Maybe<SolvedEntityResponse>;
  composition?: Maybe<SolvedEntityResponse>;
  area?: Maybe<SolvedEntityResponse>;
  photoFile?: Maybe<CloudFileResponse>;
  groups: Array<SolvedEntityResponse>;
  barCode: Array<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductSalePriceFilterFilter = {
  and?: Maybe<Array<ProductSalePriceFilterFilter>>;
  or?: Maybe<Array<ProductSalePriceFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  product?: Maybe<StringFieldComparison>;
  generalValueTax?: Maybe<StringFieldComparison>;
  generalValue?: Maybe<StringFieldComparison>;
  generalUtilityValue?: Maybe<StringFieldComparison>;
  ncTax?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ProductSalePriceResponse = {
  id: Scalars['ID'];
  product: SolvedEntityResponse;
  generalValueTax: SolvedEntityResponse;
  generalValue: Scalars['Float'];
  generalUtilityValue: Scalars['Float'];
  ncTax: SolvedEntityResponse;
  commission: Scalars['Float'];
  specialOneValueTax: SolvedEntityResponse;
  specialOneValue: Scalars['Float'];
  specialOneUtilityValue: Scalars['Float'];
  specialTwoValueTax: SolvedEntityResponse;
  specialTwoValue: Scalars['Float'];
  specialTwoUtilityValue: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProfileFilterFilter = {
  and?: Maybe<Array<ProfileFilterFilter>>;
  or?: Maybe<Array<ProfileFilterFilter>>;
  country?: Maybe<StringFieldComparison>;
  gender?: Maybe<GenderFilterComparison>;
  zipCode?: Maybe<StringFieldComparison>;
  city?: Maybe<StringFieldComparison>;
  address?: Maybe<StringFieldComparison>;
  state?: Maybe<StringFieldComparison>;
  birthDay?: Maybe<StringFieldComparison>;
  personalWeb?: Maybe<StringFieldComparison>;
  btcWallet?: Maybe<StringFieldComparison>;
  tronWallet?: Maybe<StringFieldComparison>;
  phoneNumber?: Maybe<StringFieldComparison>;
  aboutMe?: Maybe<StringFieldComparison>;
  isLeader?: Maybe<BooleanFieldComparison>;
  area?: Maybe<IdFilterComparison>;
  position?: Maybe<IdFilterComparison>;
};

export type ProfileInput = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<Scalars['ID']>;
  position?: Maybe<Scalars['ID']>;
};

export type ProfileResponse = {
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGender>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  birthDay?: Maybe<Scalars['String']>;
  personalWeb?: Maybe<Scalars['String']>;
  btcWallet?: Maybe<Scalars['String']>;
  tronWallet?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  aboutMe?: Maybe<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
  area?: Maybe<SolvedEntityResponse>;
  position?: Maybe<SolvedEntityResponse>;
};

export type PurchaseReturnsFilterFilter = {
  and?: Maybe<Array<PurchaseReturnsFilterFilter>>;
  or?: Maybe<Array<PurchaseReturnsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type PurchaseReturnsResponse = {
  id: Scalars['ID'];
  thirdSupplier?: Maybe<SolvedEntityResponse>;
  purchase?: Maybe<SolvedEntityResponse>;
  purchaseReturnsNumber: Scalars['Float'];
  purchaseReturnsDate: Scalars['DateTime'];
  purchaseDateNow: Scalars['DateTime'];
  totalPurchaseReturnsValue: Scalars['Float'];
  subTotalPurchaseReturnsValue: Scalars['Float'];
  discount: Scalars['Float'];
  otherTaxes: Scalars['Float'];
  reference?: Maybe<Scalars['String']>;
  purchaseReturnsStatus: PurchaseReturnsStatus;
  taxes?: Maybe<Array<SolvedEntityResponse>>;
  details?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum PurchaseReturnsStatus {
  Approved = 'APPROVED',
  NotApproved = 'NOT_APPROVED',
  Pending = 'PENDING',
  Canceled = 'CANCELED'
}

export type Query = {
  getAllTenant?: Maybe<Array<TenantResponse>>;
  getRequestTenant?: Maybe<TenantResponse>;
  getOneTenant?: Maybe<TenantResponse>;
  getAllSimplifiedTenantsInfo?: Maybe<Array<SimplifiedTenantResponse>>;
  getPaginatedTenant: PaginatedTenantResponse;
  getTenantRequest?: Maybe<SimplifiedTenantResponse>;
  getAllUsers: Array<UserResponse>;
  getOneUser: UserResponse;
  getPaginatedUser: PaginatedUsers;
  getMyProfile?: Maybe<ProfileResponse>;
  getUserProfile?: Maybe<ProfileResponse>;
  getAllNotification?: Maybe<Array<NotificationResponse>>;
  getOneNotification?: Maybe<NotificationResponse>;
  getPaginatedNotification?: Maybe<PaginatedNotificationResponse>;
  getAllRole: Array<RoleResponse>;
  getOneRole?: Maybe<RoleResponse>;
  getPaginatedRole?: Maybe<PaginatedRoleResponse>;
  getAvailablePermits: Array<AvailablePermitsResponse>;
  getAllUserArea?: Maybe<Array<UserAreaResponse>>;
  getOneUserArea?: Maybe<UserAreaResponse>;
  getPaginatedUserArea?: Maybe<PaginatedUserAreaResponse>;
  getAllUserPosition?: Maybe<Array<UserPositionResponse>>;
  getOneUserPosition?: Maybe<UserPositionResponse>;
  getPaginatedUserPosition?: Maybe<PaginatedUserPositionResponse>;
  myInfo?: Maybe<AuthUserResponse>;
  verifyToken: Scalars['Boolean'];
  getWriteSignedUrl: CloudFileIdResponse;
  getOneFiles?: Maybe<FilesResponse>;
  getPaginatedFiles?: Maybe<PaginatedFilesResponse>;
  getAllGroup?: Maybe<Array<GroupResponse>>;
  getOneGroup?: Maybe<GroupResponse>;
  getPaginatedGroup?: Maybe<PaginatedGroupResponse>;
  getAllWarehouse: Array<WarehouseResponse>;
  getOneWarehouse?: Maybe<WarehouseResponse>;
  getPaginatedWarehouse?: Maybe<PaginatedWarehouseResponse>;
  getAllTaxes: Array<TaxesResponse>;
  getOneTaxes?: Maybe<TaxesResponse>;
  getPaginatedTaxes?: Maybe<PaginatedTaxesResponse>;
  getAllCompany: Array<CompanyResponse>;
  getOneCompany?: Maybe<CompanyResponse>;
  getPaginatedCompany?: Maybe<PaginatedCompanyResponse>;
  getAllBarCodeIdentifier: Array<BarCodeIdentifierResponse>;
  getOneBarCodeIdentifier?: Maybe<BarCodeIdentifierResponse>;
  getPaginatedBarCodeIdentifier?: Maybe<PaginatedBarCodeIdentifierResponse>;
  getAllBillingResolution: Array<BillingResolutionResponse>;
  getOneBillingResolution?: Maybe<BillingResolutionResponse>;
  getPaginatedBillingResolution?: Maybe<PaginatedBillingResolutionResponse>;
  getAllProduct: Array<ProductResponse>;
  getOneProduct?: Maybe<ProductResponse>;
  getPaginatedProduct?: Maybe<PaginatedProductResponse>;
  getAllProductMenu: Array<ProductMenuResponse>;
  getOneProductMenu?: Maybe<ProductMenuResponse>;
  getPaginatedProductMenu?: Maybe<PaginatedProductMenuResponse>;
  getAllProductArea: Array<ProductAreaResponse>;
  getOneProductArea?: Maybe<ProductAreaResponse>;
  getPaginatedProductArea?: Maybe<PaginatedProductAreaResponse>;
  getAllProductParams: Array<ProductParamsResponse>;
  getOneProductParams?: Maybe<ProductParamsResponse>;
  getPaginatedProductParams?: Maybe<PaginatedProductParamsResponse>;
  getAllProductGroup: Array<ProductGroupResponse>;
  getOneProductGroup?: Maybe<ProductGroupResponse>;
  getPaginatedProductGroup?: Maybe<PaginatedProductGroupResponse>;
  getAllTaxesAndCosts: Array<TaxesAndCostsResponse>;
  getOneTaxesAndCosts?: Maybe<TaxesAndCostsResponse>;
  getPaginatedTaxesAndCosts?: Maybe<PaginatedTaxesAndCostsResponse>;
  getAllComposition: Array<CompositionResponse>;
  getOneComposition?: Maybe<CompositionResponse>;
  getPaginatedComposition?: Maybe<PaginatedCompositionResponse>;
  getAllProductSalePrice: Array<ProductSalePriceResponse>;
  getOneProductSalePrice?: Maybe<ProductSalePriceResponse>;
  getPaginatedProductSalePrice?: Maybe<PaginatedProductSalePriceResponse>;
  getAllPreparationType: Array<PreparationTypeResponse>;
  getOnePreparationType?: Maybe<PreparationTypeResponse>;
  getPaginatedPreparationType?: Maybe<PaginatedPreparationTypeResponse>;
  getAllPreparation: Array<PreparationResponse>;
  getOnePreparation?: Maybe<PreparationResponse>;
  getPaginatedPreparation?: Maybe<PaginatedPreparationResponse>;
  getAllUnitMeasurement: Array<UnitMeasurementResponse>;
  getOneUnitMeasurement?: Maybe<UnitMeasurementResponse>;
  getPaginatedUnitMeasurement?: Maybe<PaginatedUnitMeasurementResponse>;
  getAllProductCategory: Array<ProductCategoryResponse>;
  getOneProductCategory?: Maybe<ProductCategoryResponse>;
  getPaginatedProductCategory?: Maybe<PaginatedProductCategoryResponse>;
  getAllServices: Array<ServicesResponse>;
  getOneServices?: Maybe<ServicesResponse>;
  getPaginatedServices?: Maybe<PaginatedServicesResponse>;
  getAllPartialTotalPhysicalInventory: Array<PartialTotalPhysicalInventoryResponse>;
  getOnePartialTotalPhysicalInventory?: Maybe<PartialTotalPhysicalInventoryResponse>;
  getPaginatedPartialTotalPhysicalInventory?: Maybe<PaginatedPartialTotalPhysicalInventoryResponse>;
  getAllPartialInventoryItems: Array<PartialInventoryItemsResponse>;
  getOnePartialInventoryItems?: Maybe<PartialInventoryItemsResponse>;
  getPaginatedPartialInventoryItems?: Maybe<PaginatedPartialInventoryItemsResponse>;
  getAllInitialPhysicalInventory: Array<InitialPhysicalInventoryResponse>;
  getOneInitialPhysicalInventory?: Maybe<InitialPhysicalInventoryResponse>;
  getPaginatedInitialPhysicalInventory?: Maybe<PaginatedInitialPhysicalInventoryResponse>;
  getAllInventoryCovementConcepts: Array<InventoryCovementConceptsResponse>;
  getOneInventoryCovementConcepts?: Maybe<InventoryCovementConceptsResponse>;
  getPaginatedInventoryCovementConcepts?: Maybe<PaginatedInventoryCovementConceptsResponse>;
  getAllInventoryMovement: Array<InventoryMovementResponse>;
  getOneInventoryMovement?: Maybe<InventoryMovementResponse>;
  getPaginatedInventoryMovement?: Maybe<PaginatedInventoryMovementResponse>;
  getAllInventoryMovementItems: Array<InventoryMovementItemsResponse>;
  getOneInventoryMovementItems?: Maybe<InventoryMovementItemsResponse>;
  getPaginatedInventoryMovementItems?: Maybe<PaginatedInventoryMovementItemsResponse>;
  getAllSerialMovement: Array<SerialMovementResponse>;
  getOneSerialMovement?: Maybe<SerialMovementResponse>;
  getPaginatedSerialMovement?: Maybe<PaginatedSerialMovementResponse>;
  getAllInventoryTransfer: Array<InventoryTransferResponse>;
  getOneInventoryTransfer?: Maybe<InventoryTransferResponse>;
  getPaginatedInventoryTransfer?: Maybe<PaginatedInventoryTransferResponse>;
  getAllInventoryTransferItems: Array<InventoryTransferItemsResponse>;
  getOneInventoryTransferItems?: Maybe<InventoryTransferItemsResponse>;
  getPaginatedInventoryTransferItems?: Maybe<PaginatedInventoryTransferItemsResponse>;
  getAllSerialTransfer: Array<SerialTransferResponse>;
  getOneSerialTransfer?: Maybe<SerialTransferResponse>;
  getPaginatedSerialTransfer?: Maybe<PaginatedSerialTransferResponse>;
  getAllPaymentMethod: Array<PaymentMethodResponse>;
  getOnePaymentMethod?: Maybe<PaymentMethodResponse>;
  getPaginatedPaymentMethod?: Maybe<PaginatedPaymentMethodResponse>;
  getAllCreditCard: Array<CreditCardResponse>;
  getOneCreditCard?: Maybe<CreditCardResponse>;
  getPaginatedCreditCard?: Maybe<PaginatedCreditCardResponse>;
  getAllBanks: Array<BanksResponse>;
  getOneBanks?: Maybe<BanksResponse>;
  getPaginatedBanks?: Maybe<PaginatedBanksResponse>;
  getAllThirdParties: Array<ThirdPartiesResponse>;
  getOneThirdParties?: Maybe<ThirdPartiesResponse>;
  getPaginatedThirdParties?: Maybe<PaginatedThirdPartiesResponse>;
  getAllThirdPartyClassification: Array<ThirdPartyClassificationResponse>;
  getOneThirdPartyClassification?: Maybe<ThirdPartyClassificationResponse>;
  getPaginatedThirdPartyClassification?: Maybe<PaginatedThirdPartyClassificationResponse>;
  getAllRegimeType: Array<RegimeTypeResponse>;
  getOneRegimeType?: Maybe<RegimeTypeResponse>;
  getPaginatedRegimeType?: Maybe<PaginatedRegimeTypeResponse>;
  getAllEconomicActivities: Array<EconomicActivitiesResponse>;
  getOneEconomicActivities?: Maybe<EconomicActivitiesResponse>;
  getPaginatedEconomicActivities?: Maybe<PaginatedEconomicActivitiesResponse>;
  getAllFiscalResponsibility: Array<FiscalResponsibilityResponse>;
  getOneFiscalResponsibility?: Maybe<FiscalResponsibilityResponse>;
  getPaginatedFiscalResponsibility?: Maybe<PaginatedFiscalResponsibilityResponse>;
  getAllTributaryInformation: Array<TributaryInformationResponse>;
  getOneTributaryInformation?: Maybe<TributaryInformationResponse>;
  getPaginatedTributaryInformation?: Maybe<PaginatedTributaryInformationResponse>;
  getAllSerial: Array<SerialResponse>;
  getOneSerial?: Maybe<SerialResponse>;
  getPaginatedSerial?: Maybe<PaginatedSerialResponse>;
  getAllPurchaseReturns: Array<PurchaseReturnsResponse>;
  getOnePurchaseReturns?: Maybe<PurchaseReturnsResponse>;
  getPaginatedPurchaseReturns?: Maybe<PaginatedPurchaseReturnsResponse>;
  getAllMonetaryDenomination: Array<MonetaryDenominationResponse>;
  getOneMonetaryDenomination?: Maybe<MonetaryDenominationResponse>;
  getPaginatedMonetaryDenomination?: Maybe<PaginatedMonetaryDenominationResponse>;
  getAllCompositionDecomposition: Array<CompositionDecompositionResponse>;
  getOneCompositionDecomposition?: Maybe<CompositionDecompositionResponse>;
  getPaginatedCompositionDecomposition?: Maybe<PaginatedCompositionDecompositionResponse>;
};


export type QueryGetAllTenantArgs = {
  input: GetAllTenantsInput;
};


export type QueryGetOneTenantArgs = {
  input: GetOneTenantInput;
};


export type QueryGetAllSimplifiedTenantsInfoArgs = {
  input: GetAllTenantsInput;
};


export type QueryGetPaginatedTenantArgs = {
  input?: Maybe<GetPaginatedTenantInput>;
};


export type QueryGetAllUsersArgs = {
  input?: Maybe<GetAllUsersInput>;
};


export type QueryGetOneUserArgs = {
  input?: Maybe<GetOneUserInput>;
};


export type QueryGetPaginatedUserArgs = {
  input?: Maybe<GetPaginatedUsersInput>;
};


export type QueryGetUserProfileArgs = {
  userId: Scalars['ID'];
};


export type QueryGetAllNotificationArgs = {
  input?: Maybe<GetAllNotificationInput>;
};


export type QueryGetOneNotificationArgs = {
  input?: Maybe<GetOneNotificationInput>;
};


export type QueryGetPaginatedNotificationArgs = {
  input?: Maybe<GetPaginatedNotificationInput>;
};


export type QueryGetAllRoleArgs = {
  input?: Maybe<GetAllRoleInput>;
};


export type QueryGetOneRoleArgs = {
  input?: Maybe<GetOneRoleInput>;
};


export type QueryGetPaginatedRoleArgs = {
  input?: Maybe<GetPaginatedRoleInput>;
};


export type QueryGetAvailablePermitsArgs = {
  input?: Maybe<GetAllRoleInput>;
};


export type QueryGetAllUserAreaArgs = {
  input?: Maybe<GetAllUserAreaInput>;
};


export type QueryGetOneUserAreaArgs = {
  input?: Maybe<GetOneUserAreaInput>;
};


export type QueryGetPaginatedUserAreaArgs = {
  input?: Maybe<GetPaginatedUserAreaInput>;
};


export type QueryGetAllUserPositionArgs = {
  input?: Maybe<GetAllUserPositionInput>;
};


export type QueryGetOneUserPositionArgs = {
  input?: Maybe<GetOneUserPositionInput>;
};


export type QueryGetPaginatedUserPositionArgs = {
  input?: Maybe<GetPaginatedUserPositionInput>;
};


export type QueryGetWriteSignedUrlArgs = {
  input: GetUploadSignedUrlInput;
};


export type QueryGetOneFilesArgs = {
  input?: Maybe<GetOneFilesInput>;
};


export type QueryGetPaginatedFilesArgs = {
  input?: Maybe<GetPaginatedFilesInput>;
};


export type QueryGetAllGroupArgs = {
  input?: Maybe<GetAllGroupInput>;
};


export type QueryGetOneGroupArgs = {
  input?: Maybe<GetOneGroupInput>;
};


export type QueryGetPaginatedGroupArgs = {
  input?: Maybe<GetPaginatedGroupInput>;
};


export type QueryGetAllWarehouseArgs = {
  input?: Maybe<GetAllWarehouseInput>;
};


export type QueryGetOneWarehouseArgs = {
  input?: Maybe<GetOneWarehouseInput>;
};


export type QueryGetPaginatedWarehouseArgs = {
  input?: Maybe<GetPaginatedWarehouseInput>;
};


export type QueryGetAllTaxesArgs = {
  input?: Maybe<GetAllTaxesInput>;
};


export type QueryGetOneTaxesArgs = {
  input?: Maybe<GetOneTaxesInput>;
};


export type QueryGetPaginatedTaxesArgs = {
  input?: Maybe<GetPaginatedTaxesInput>;
};


export type QueryGetAllCompanyArgs = {
  input?: Maybe<GetAllCompanyInput>;
};


export type QueryGetOneCompanyArgs = {
  input?: Maybe<GetOneCompanyInput>;
};


export type QueryGetPaginatedCompanyArgs = {
  input?: Maybe<GetPaginatedCompanyInput>;
};


export type QueryGetAllBarCodeIdentifierArgs = {
  input?: Maybe<GetAllBarCodeIdentifierInput>;
};


export type QueryGetOneBarCodeIdentifierArgs = {
  input?: Maybe<GetOneBarCodeIdentifierInput>;
};


export type QueryGetPaginatedBarCodeIdentifierArgs = {
  input?: Maybe<GetPaginatedBarCodeIdentifierInput>;
};


export type QueryGetAllBillingResolutionArgs = {
  input?: Maybe<GetAllBillingResolutionInput>;
};


export type QueryGetOneBillingResolutionArgs = {
  input?: Maybe<GetOneBillingResolutionInput>;
};


export type QueryGetPaginatedBillingResolutionArgs = {
  input?: Maybe<GetPaginatedBillingResolutionInput>;
};


export type QueryGetAllProductArgs = {
  input?: Maybe<GetAllProductInput>;
};


export type QueryGetOneProductArgs = {
  input?: Maybe<GetOneProductInput>;
};


export type QueryGetPaginatedProductArgs = {
  input?: Maybe<GetPaginatedProductInput>;
};


export type QueryGetAllProductMenuArgs = {
  input?: Maybe<GetAllProductMenuInput>;
};


export type QueryGetOneProductMenuArgs = {
  input?: Maybe<GetOneProductMenuInput>;
};


export type QueryGetPaginatedProductMenuArgs = {
  input?: Maybe<GetPaginatedProductMenuInput>;
};


export type QueryGetAllProductAreaArgs = {
  input?: Maybe<GetAllProductAreaInput>;
};


export type QueryGetOneProductAreaArgs = {
  input?: Maybe<GetOneProductAreaInput>;
};


export type QueryGetPaginatedProductAreaArgs = {
  input?: Maybe<GetPaginatedProductAreaInput>;
};


export type QueryGetAllProductParamsArgs = {
  input?: Maybe<GetAllProductParamsInput>;
};


export type QueryGetOneProductParamsArgs = {
  input?: Maybe<GetOneProductParamsInput>;
};


export type QueryGetPaginatedProductParamsArgs = {
  input?: Maybe<GetPaginatedProductParamsInput>;
};


export type QueryGetAllProductGroupArgs = {
  input?: Maybe<GetAllProductGroupInput>;
};


export type QueryGetOneProductGroupArgs = {
  input?: Maybe<GetOneProductGroupInput>;
};


export type QueryGetPaginatedProductGroupArgs = {
  input?: Maybe<GetPaginatedProductGroupInput>;
};


export type QueryGetAllTaxesAndCostsArgs = {
  input?: Maybe<GetAllTaxesAndCostsInput>;
};


export type QueryGetOneTaxesAndCostsArgs = {
  input?: Maybe<GetOneTaxesAndCostsInput>;
};


export type QueryGetPaginatedTaxesAndCostsArgs = {
  input?: Maybe<GetPaginatedTaxesAndCostsInput>;
};


export type QueryGetAllCompositionArgs = {
  input?: Maybe<GetAllCompositionInput>;
};


export type QueryGetOneCompositionArgs = {
  input?: Maybe<GetOneCompositionInput>;
};


export type QueryGetPaginatedCompositionArgs = {
  input?: Maybe<GetPaginatedCompositionInput>;
};


export type QueryGetAllProductSalePriceArgs = {
  input?: Maybe<GetAllProductSalePriceInput>;
};


export type QueryGetOneProductSalePriceArgs = {
  input?: Maybe<GetOneProductSalePriceInput>;
};


export type QueryGetPaginatedProductSalePriceArgs = {
  input?: Maybe<GetPaginatedProductSalePriceInput>;
};


export type QueryGetAllPreparationTypeArgs = {
  input?: Maybe<GetAllPreparationTypeInput>;
};


export type QueryGetOnePreparationTypeArgs = {
  input?: Maybe<GetOnePreparationTypeInput>;
};


export type QueryGetPaginatedPreparationTypeArgs = {
  input?: Maybe<GetPaginatedPreparationTypeInput>;
};


export type QueryGetAllPreparationArgs = {
  input?: Maybe<GetAllPreparationInput>;
};


export type QueryGetOnePreparationArgs = {
  input?: Maybe<GetOnePreparationInput>;
};


export type QueryGetPaginatedPreparationArgs = {
  input?: Maybe<GetPaginatedPreparationInput>;
};


export type QueryGetAllUnitMeasurementArgs = {
  input?: Maybe<GetAllUnitMeasurementInput>;
};


export type QueryGetOneUnitMeasurementArgs = {
  input?: Maybe<GetOneUnitMeasurementInput>;
};


export type QueryGetPaginatedUnitMeasurementArgs = {
  input?: Maybe<GetPaginatedUnitMeasurementInput>;
};


export type QueryGetAllProductCategoryArgs = {
  input?: Maybe<GetAllProductCategoryInput>;
};


export type QueryGetOneProductCategoryArgs = {
  input?: Maybe<GetOneProductCategoryInput>;
};


export type QueryGetPaginatedProductCategoryArgs = {
  input?: Maybe<GetPaginatedProductCategoryInput>;
};


export type QueryGetAllServicesArgs = {
  input?: Maybe<GetAllServicesInput>;
};


export type QueryGetOneServicesArgs = {
  input?: Maybe<GetOneServicesInput>;
};


export type QueryGetPaginatedServicesArgs = {
  input?: Maybe<GetPaginatedServicesInput>;
};


export type QueryGetAllPartialTotalPhysicalInventoryArgs = {
  input?: Maybe<GetAllPartialTotalPhysicalInventoryInput>;
};


export type QueryGetOnePartialTotalPhysicalInventoryArgs = {
  input?: Maybe<GetOnePartialTotalPhysicalInventoryInput>;
};


export type QueryGetPaginatedPartialTotalPhysicalInventoryArgs = {
  input?: Maybe<GetPaginatedPartialTotalPhysicalInventoryInput>;
};


export type QueryGetAllPartialInventoryItemsArgs = {
  input?: Maybe<GetAllPartialInventoryItemsInput>;
};


export type QueryGetOnePartialInventoryItemsArgs = {
  input?: Maybe<GetOnePartialInventoryItemsInput>;
};


export type QueryGetPaginatedPartialInventoryItemsArgs = {
  input?: Maybe<GetPaginatedPartialInventoryItemsInput>;
};


export type QueryGetAllInitialPhysicalInventoryArgs = {
  input?: Maybe<GetAllInitialPhysicalInventoryInput>;
};


export type QueryGetOneInitialPhysicalInventoryArgs = {
  input?: Maybe<GetOneInitialPhysicalInventoryInput>;
};


export type QueryGetPaginatedInitialPhysicalInventoryArgs = {
  input?: Maybe<GetPaginatedInitialPhysicalInventoryInput>;
};


export type QueryGetAllInventoryCovementConceptsArgs = {
  input?: Maybe<GetAllInventoryCovementConceptsInput>;
};


export type QueryGetOneInventoryCovementConceptsArgs = {
  input?: Maybe<GetOneInventoryCovementConceptsInput>;
};


export type QueryGetPaginatedInventoryCovementConceptsArgs = {
  input?: Maybe<GetPaginatedInventoryCovementConceptsInput>;
};


export type QueryGetAllInventoryMovementArgs = {
  input?: Maybe<GetAllInventoryMovementInput>;
};


export type QueryGetOneInventoryMovementArgs = {
  input?: Maybe<GetOneInventoryMovementInput>;
};


export type QueryGetPaginatedInventoryMovementArgs = {
  input?: Maybe<GetPaginatedInventoryMovementInput>;
};


export type QueryGetAllInventoryMovementItemsArgs = {
  input?: Maybe<GetAllInventoryMovementItemsInput>;
};


export type QueryGetOneInventoryMovementItemsArgs = {
  input?: Maybe<GetOneInventoryMovementItemsInput>;
};


export type QueryGetPaginatedInventoryMovementItemsArgs = {
  input?: Maybe<GetPaginatedInventoryMovementItemsInput>;
};


export type QueryGetAllSerialMovementArgs = {
  input?: Maybe<GetAllSerialMovementInput>;
};


export type QueryGetOneSerialMovementArgs = {
  input?: Maybe<GetOneSerialMovementInput>;
};


export type QueryGetPaginatedSerialMovementArgs = {
  input?: Maybe<GetPaginatedSerialMovementInput>;
};


export type QueryGetAllInventoryTransferArgs = {
  input?: Maybe<GetAllInventoryTransferInput>;
};


export type QueryGetOneInventoryTransferArgs = {
  input?: Maybe<GetOneInventoryTransferInput>;
};


export type QueryGetPaginatedInventoryTransferArgs = {
  input?: Maybe<GetPaginatedInventoryTransferInput>;
};


export type QueryGetAllInventoryTransferItemsArgs = {
  input?: Maybe<GetAllInventoryTransferItemsInput>;
};


export type QueryGetOneInventoryTransferItemsArgs = {
  input?: Maybe<GetOneInventoryTransferItemsInput>;
};


export type QueryGetPaginatedInventoryTransferItemsArgs = {
  input?: Maybe<GetPaginatedInventoryTransferItemsInput>;
};


export type QueryGetAllSerialTransferArgs = {
  input?: Maybe<GetAllSerialTransferInput>;
};


export type QueryGetOneSerialTransferArgs = {
  input?: Maybe<GetOneSerialTransferInput>;
};


export type QueryGetPaginatedSerialTransferArgs = {
  input?: Maybe<GetPaginatedSerialTransferInput>;
};


export type QueryGetAllPaymentMethodArgs = {
  input?: Maybe<GetAllPaymentMethodInput>;
};


export type QueryGetOnePaymentMethodArgs = {
  input?: Maybe<GetOnePaymentMethodInput>;
};


export type QueryGetPaginatedPaymentMethodArgs = {
  input?: Maybe<GetPaginatedPaymentMethodInput>;
};


export type QueryGetAllCreditCardArgs = {
  input?: Maybe<GetAllCreditCardInput>;
};


export type QueryGetOneCreditCardArgs = {
  input?: Maybe<GetOneCreditCardInput>;
};


export type QueryGetPaginatedCreditCardArgs = {
  input?: Maybe<GetPaginatedCreditCardInput>;
};


export type QueryGetAllBanksArgs = {
  input?: Maybe<GetAllBanksInput>;
};


export type QueryGetOneBanksArgs = {
  input?: Maybe<GetOneBanksInput>;
};


export type QueryGetPaginatedBanksArgs = {
  input?: Maybe<GetPaginatedBanksInput>;
};


export type QueryGetAllThirdPartiesArgs = {
  input?: Maybe<GetAllThirdPartiesInput>;
};


export type QueryGetOneThirdPartiesArgs = {
  input?: Maybe<GetOneThirdPartiesInput>;
};


export type QueryGetPaginatedThirdPartiesArgs = {
  input?: Maybe<GetPaginatedThirdPartiesInput>;
};


export type QueryGetAllThirdPartyClassificationArgs = {
  input?: Maybe<GetAllThirdPartyClassificationInput>;
};


export type QueryGetOneThirdPartyClassificationArgs = {
  input?: Maybe<GetOneThirdPartyClassificationInput>;
};


export type QueryGetPaginatedThirdPartyClassificationArgs = {
  input?: Maybe<GetPaginatedThirdPartyClassificationInput>;
};


export type QueryGetAllRegimeTypeArgs = {
  input?: Maybe<GetAllRegimeTypeInput>;
};


export type QueryGetOneRegimeTypeArgs = {
  input?: Maybe<GetOneRegimeTypeInput>;
};


export type QueryGetPaginatedRegimeTypeArgs = {
  input?: Maybe<GetPaginatedRegimeTypeInput>;
};


export type QueryGetAllEconomicActivitiesArgs = {
  input?: Maybe<GetAllEconomicActivitiesInput>;
};


export type QueryGetOneEconomicActivitiesArgs = {
  input?: Maybe<GetOneEconomicActivitiesInput>;
};


export type QueryGetPaginatedEconomicActivitiesArgs = {
  input?: Maybe<GetPaginatedEconomicActivitiesInput>;
};


export type QueryGetAllFiscalResponsibilityArgs = {
  input?: Maybe<GetAllFiscalResponsibilityInput>;
};


export type QueryGetOneFiscalResponsibilityArgs = {
  input?: Maybe<GetOneFiscalResponsibilityInput>;
};


export type QueryGetPaginatedFiscalResponsibilityArgs = {
  input?: Maybe<GetPaginatedFiscalResponsibilityInput>;
};


export type QueryGetAllTributaryInformationArgs = {
  input?: Maybe<GetAllTributaryInformationInput>;
};


export type QueryGetOneTributaryInformationArgs = {
  input?: Maybe<GetOneTributaryInformationInput>;
};


export type QueryGetPaginatedTributaryInformationArgs = {
  input?: Maybe<GetPaginatedTributaryInformationInput>;
};


export type QueryGetAllSerialArgs = {
  input?: Maybe<GetAllSerialInput>;
};


export type QueryGetOneSerialArgs = {
  input?: Maybe<GetOneSerialInput>;
};


export type QueryGetPaginatedSerialArgs = {
  input?: Maybe<GetPaginatedSerialInput>;
};


export type QueryGetAllPurchaseReturnsArgs = {
  input?: Maybe<GetAllPurchaseReturnsInput>;
};


export type QueryGetOnePurchaseReturnsArgs = {
  input?: Maybe<GetOnePurchaseReturnsInput>;
};


export type QueryGetPaginatedPurchaseReturnsArgs = {
  input?: Maybe<GetPaginatedPurchaseReturnsInput>;
};


export type QueryGetAllMonetaryDenominationArgs = {
  input?: Maybe<GetAllMonetaryDenominationInput>;
};


export type QueryGetOneMonetaryDenominationArgs = {
  input?: Maybe<GetOneMonetaryDenominationInput>;
};


export type QueryGetPaginatedMonetaryDenominationArgs = {
  input?: Maybe<GetPaginatedMonetaryDenominationInput>;
};


export type QueryGetAllCompositionDecompositionArgs = {
  input?: Maybe<GetAllCompositionDecompositionInput>;
};


export type QueryGetOneCompositionDecompositionArgs = {
  input?: Maybe<GetOneCompositionDecompositionInput>;
};


export type QueryGetPaginatedCompositionDecompositionArgs = {
  input?: Maybe<GetPaginatedCompositionDecompositionInput>;
};

export enum RegimeType {
  Common = 'COMMON',
  Simplified = 'SIMPLIFIED',
  GreatContributor = 'GREAT_CONTRIBUTOR'
}

export type RegimeTypeFilterFilter = {
  and?: Maybe<Array<RegimeTypeFilterFilter>>;
  or?: Maybe<Array<RegimeTypeFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type RegimeTypeResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResetPasswordInput = {
  password: Scalars['String'];
};

export enum ResolutionClass {
  Class1 = 'CLASS1',
  Class2 = 'CLASS2',
  Class3 = 'CLASS3'
}

export enum ResolutionType {
  ResolutionType1 = 'RESOLUTION_TYPE1',
  ResolutionType2 = 'RESOLUTION_TYPE2',
  ResolutionType3 = 'RESOLUTION_TYPE3'
}

export enum Retention {
  Exempt = 'EXEMPT',
  SelfRetainer = 'SELF_RETAINER',
  ChronicWithoutNursing = 'CHRONIC_WITHOUT_NURSING',
  NotDeclarant = 'NOT_DECLARANT',
  Declarant = 'DECLARANT'
}

export type RoleFilterFilter = {
  and?: Maybe<Array<RoleFilterFilter>>;
  or?: Maybe<Array<RoleFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type RoleResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permits: Array<PermitsResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SerialFilterFilter = {
  and?: Maybe<Array<SerialFilterFilter>>;
  or?: Maybe<Array<SerialFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type SerialMovementFilterFilter = {
  and?: Maybe<Array<SerialMovementFilterFilter>>;
  or?: Maybe<Array<SerialMovementFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type SerialMovementResponse = {
  id: Scalars['ID'];
  serial: Scalars['String'];
  product?: Maybe<SolvedEntityResponse>;
  movementInventory?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SerialResponse = {
  id: Scalars['ID'];
  serial: Scalars['String'];
  product?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SerialTransferFilterFilter = {
  and?: Maybe<Array<SerialTransferFilterFilter>>;
  or?: Maybe<Array<SerialTransferFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type SerialTransferResponse = {
  id: Scalars['ID'];
  serial: Scalars['String'];
  product?: Maybe<SolvedEntityResponse>;
  transferInventory?: Maybe<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServicesFilterFilter = {
  and?: Maybe<Array<ServicesFilterFilter>>;
  or?: Maybe<Array<ServicesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ServicesResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  ref: Scalars['String'];
  iva: SolvedEntityResponse;
  um: SolvedEntityResponse;
  area: SolvedEntityResponse;
  groups: Array<SolvedEntityResponse>;
  cost: Scalars['Float'];
  price: Scalars['Float'];
  ultCost: Scalars['Boolean'];
  loadOrderScreen: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SignInInput = {
  unique: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  tokenId?: Maybe<Scalars['String']>;
  provider?: Maybe<Provider>;
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  lastname: Scalars['String'];
  firstname: Scalars['String'];
  username: Scalars['String'];
};

export type SimplifiedTenantResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type SolvedEntityResponse = {
  id: Scalars['ID'];
  entityName?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<EntityFieldsResponse>>;
};

export type StringFieldComparison = {
  is?: Maybe<Scalars['Boolean']>;
  isNot?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  iLike?: Maybe<Scalars['String']>;
  notILike?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  onCreateNotification?: Maybe<NotificationResponse>;
};


export type SubscriptionOnCreateNotificationArgs = {
  toUser: Scalars['String'];
};

export enum TaxType {
  IncludedInPrice = 'INCLUDED_IN_PRICE',
  ConsumptionTax = 'CONSUMPTION_TAX',
  GeneralTax = 'GENERAL_TAX'
}

export type TaxesAndCostsFilterFilter = {
  and?: Maybe<Array<TaxesAndCostsFilterFilter>>;
  or?: Maybe<Array<TaxesAndCostsFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TaxesAndCostsResponse = {
  id: Scalars['ID'];
  product: SolvedEntityResponse;
  shoppingTax: SolvedEntityResponse;
  applyIco?: Maybe<Scalars['Boolean']>;
  valueIco: Scalars['Float'];
  includeIcoInCost?: Maybe<Scalars['Boolean']>;
  productCost: Scalars['Float'];
  unitCost: Scalars['Float'];
  unitTaxCost: SolvedEntityResponse;
  valueUnitTaxCost: Scalars['Float'];
  totalUnitCost: Scalars['Float'];
  volumePrice: Array<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaxesFilterFilter = {
  and?: Maybe<Array<TaxesFilterFilter>>;
  or?: Maybe<Array<TaxesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  tax?: Maybe<StringFieldComparison>;
  taxType?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TaxesResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  tax: Scalars['Float'];
  isActive: Scalars['Boolean'];
  taxType: Array<TaxType>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum TenantCurrency {
  Usd = 'USD',
  Cop = 'COP',
  Eur = 'EUR'
}

export type TenantFilterFilter = {
  and?: Maybe<Array<TenantFilterFilter>>;
  or?: Maybe<Array<TenantFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TenantInfoInput = {
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<TenantCurrency>;
  responsible?: Maybe<TenantResponsibleInput>;
  logoFile?: Maybe<Scalars['ID']>;
};

export type TenantInfoResponse = {
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  nit?: Maybe<Scalars['String']>;
  webSite?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  currency?: Maybe<TenantCurrency>;
  responsible?: Maybe<TenantResponsibleResponse>;
  logoFile?: Maybe<CloudFileResponse>;
};

export type TenantResponse = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
  info?: Maybe<TenantInfoResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TenantResponsibleInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type TenantResponsibleResponse = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ThirdPartiesFilterFilter = {
  and?: Maybe<Array<ThirdPartiesFilterFilter>>;
  or?: Maybe<Array<ThirdPartiesFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ThirdPartiesResponse = {
  id: Scalars['ID'];
  identificationDocument?: Maybe<Scalars['String']>;
  verificationDigit?: Maybe<Scalars['String']>;
  identificationDocumentType: IdentificationDocumentType;
  personType: PersonType;
  barCode?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstSurname?: Maybe<Scalars['String']>;
  secondSurname?: Maybe<Scalars['String']>;
  businessName?: Maybe<Scalars['String']>;
  tradename?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  secondPhoneNumber?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  thirdPartyClassification?: Maybe<SolvedEntityResponse>;
  nationality?: Maybe<Scalars['String']>;
  regime: RegimeType;
  isClient: Scalars['Boolean'];
  isEmployee: Scalars['Boolean'];
  isSupplier: Scalars['Boolean'];
  isOtherSellers: Scalars['Boolean'];
  isPosBilling: Scalars['Boolean'];
  photoFile?: Maybe<CloudFileResponse>;
  assignDebtQuota: Scalars['Boolean'];
  debtQuota?: Maybe<Scalars['Float']>;
  isSetPrices: Scalars['Boolean'];
  priceType: PriceType;
  isActive: Scalars['Boolean'];
  enablePoints: Scalars['Boolean'];
  baseRetention?: Maybe<Scalars['Float']>;
  percentageRetention?: Maybe<Scalars['Float']>;
  seller: SolvedEntityResponse;
  products: Array<SolvedEntityResponse>;
  restrictPaymentMethod: Scalars['Boolean'];
  restrictAllPaymentMethod: Scalars['Boolean'];
  paymentMethod: Array<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ThirdPartyClassificationFilterFilter = {
  and?: Maybe<Array<ThirdPartyClassificationFilterFilter>>;
  or?: Maybe<Array<ThirdPartyClassificationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type ThirdPartyClassificationResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  assignDebtQuota: Scalars['Boolean'];
  debtQuota: Scalars['Float'];
  gourmetConnection: Scalars['Boolean'];
  includeServiceOrders: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum TransferStatus {
  Confirmed = 'CONFIRMED',
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Approved = 'APPROVED'
}

export type TributaryInformationFilterFilter = {
  and?: Maybe<Array<TributaryInformationFilterFilter>>;
  or?: Maybe<Array<TributaryInformationFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type TributaryInformationResponse = {
  id: Scalars['ID'];
  third?: Maybe<SolvedEntityResponse>;
  regimeType?: Maybe<SolvedEntityResponse>;
  economicActivities?: Maybe<SolvedEntityResponse>;
  retention?: Maybe<Retention>;
  registrationNumber: Scalars['Int'];
  taxDetail: Array<SolvedEntityResponse>;
  fiscalResponsibility: Array<SolvedEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UnitMeasurementFilterFilter = {
  and?: Maybe<Array<UnitMeasurementFilterFilter>>;
  or?: Maybe<Array<UnitMeasurementFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UnitMeasurementResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdateBanksInput = {
  entityId: Scalars['ID'];
  update: PartialBanksInput;
};

export type UpdateBarCodeIdentifierInput = {
  entityId: Scalars['ID'];
  update: PartialBarCodeIdentifierInput;
};

export type UpdateBillingResolutionInput = {
  entityId: Scalars['ID'];
  update: PartialBillingResolutionInput;
};

export type UpdateCompanyInput = {
  entityId: Scalars['ID'];
  update: PartialCompanyInput;
};

export type UpdateCompositionDecompositionInput = {
  entityId: Scalars['ID'];
  update: PartialCompositionDecompositionInput;
};

export type UpdateCompositionInput = {
  entityId: Scalars['ID'];
  update: PartialCompositionInput;
};

export type UpdateCreditCardInput = {
  entityId: Scalars['ID'];
  update: PartialCreditCardInput;
};

export type UpdateEconomicActivitiesInput = {
  entityId: Scalars['ID'];
  update: PartialEconomicActivitiesInput;
};

export type UpdateFilesInput = {
  entityId: Scalars['ID'];
  update: PartialFilesInput;
};

export type UpdateFiscalResponsibilityInput = {
  entityId: Scalars['ID'];
  update: PartialFiscalResponsibilityInput;
};

export type UpdateGroupInput = {
  entityId: Scalars['ID'];
  update: PartialGroupInput;
};

export type UpdateInitialPhysicalInventoryInput = {
  entityId: Scalars['ID'];
  update: PartialInitialPhysicalInventoryInput;
};

export type UpdateInventoryCovementConceptsInput = {
  entityId: Scalars['ID'];
  update: PartialInventoryCovementConceptsInput;
};

export type UpdateInventoryMovementInput = {
  entityId: Scalars['ID'];
  update: PartialInventoryMovementInput;
};

export type UpdateInventoryMovementItemsInput = {
  entityId: Scalars['ID'];
  update: PartialInventoryMovementItemsInput;
};

export type UpdateInventoryTransferInput = {
  entityId: Scalars['ID'];
  update: PartialInventoryTransferInput;
};

export type UpdateInventoryTransferItemsInput = {
  entityId: Scalars['ID'];
  update: PartialInventoryTransferItemsInput;
};

export type UpdateMeInput = {
  username?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  avatarFile?: Maybe<Scalars['ID']>;
  profile?: Maybe<PartialProfileInput>;
};

export type UpdateMonetaryDenominationInput = {
  entityId: Scalars['ID'];
  update: PartialMonetaryDenominationInput;
};

export type UpdateNotificationInput = {
  entityId: Scalars['ID'];
  update: PartialNotificationInput;
};

export type UpdatePartialInventoryItemsInput = {
  entityId: Scalars['ID'];
  update: PartialPartialInventoryItemsInput;
};

export type UpdatePartialTotalPhysicalInventoryInput = {
  entityId: Scalars['ID'];
  update: PartialPartialTotalPhysicalInventoryInput;
};

export type UpdatePaymentMethodInput = {
  entityId: Scalars['ID'];
  update: PartialPaymentMethodInput;
};

export type UpdatePreparationInput = {
  entityId: Scalars['ID'];
  update: PartialPreparationInput;
};

export type UpdatePreparationTypeInput = {
  entityId: Scalars['ID'];
  update: PartialPreparationTypeInput;
};

export type UpdateProductAreaInput = {
  entityId: Scalars['ID'];
  update: PartialProductAreaInput;
};

export type UpdateProductCategoryInput = {
  entityId: Scalars['ID'];
  update: PartialProductCategoryInput;
};

export type UpdateProductGroupInput = {
  entityId: Scalars['ID'];
  update: PartialProductGroupInput;
};

export type UpdateProductInput = {
  entityId: Scalars['ID'];
  update: PartialProductInput;
};

export type UpdateProductMenuInput = {
  entityId: Scalars['ID'];
  update: PartialProductMenuInput;
};

export type UpdateProductParamsInput = {
  entityId: Scalars['ID'];
  update: PartialProductParamsInput;
};

export type UpdateProductSalePriceInput = {
  entityId: Scalars['ID'];
  update: PartialProductSalePriceInput;
};

export type UpdatePurchaseReturnsInput = {
  entityId: Scalars['ID'];
  update: PartialPurchaseReturnsInput;
};

export type UpdateRegimeTypeInput = {
  entityId: Scalars['ID'];
  update: PartialRegimeTypeInput;
};

export type UpdateRoleInput = {
  entityId: Scalars['ID'];
  update: PartialRoleInput;
};

export type UpdateSerialInput = {
  entityId: Scalars['ID'];
  update: PartialSerialInput;
};

export type UpdateSerialMovementInput = {
  entityId: Scalars['ID'];
  update: PartialSerialMovementInput;
};

export type UpdateSerialTransferInput = {
  entityId: Scalars['ID'];
  update: PartialSerialTransferInput;
};

export type UpdateServicesInput = {
  entityId: Scalars['ID'];
  update: PartialServicesInput;
};

export type UpdateTaxesAndCostsInput = {
  entityId: Scalars['ID'];
  update: PartialTaxesAndCostsInput;
};

export type UpdateTaxesInput = {
  entityId: Scalars['ID'];
  update: PartialTaxesInput;
};

export type UpdateTenantInput = {
  entityId: Scalars['ID'];
  update: PartialTenantInput;
};

export type UpdateThirdPartiesInput = {
  entityId: Scalars['ID'];
  update: PartialThirdPartiesInput;
};

export type UpdateThirdPartyClassificationInput = {
  entityId: Scalars['ID'];
  update: PartialThirdPartyClassificationInput;
};

export type UpdateTributaryInformationInput = {
  entityId: Scalars['ID'];
  update: PartialTributaryInformationInput;
};

export type UpdateUnitMeasurementInput = {
  entityId: Scalars['ID'];
  update: PartialUnitMeasurementInput;
};

export type UpdateUserAreaInput = {
  entityId: Scalars['ID'];
  update: PartialUserAreaInput;
};

export type UpdateUserInput = {
  entityId: Scalars['ID'];
  update: PartialUserInput;
};

export type UpdateUserPositionInput = {
  entityId: Scalars['ID'];
  update: PartialUserPositionInput;
};

export type UpdateWarehouseInput = {
  entityId: Scalars['ID'];
  update: PartialWarehouseInput;
};

export type UserAreaFilterFilter = {
  and?: Maybe<Array<UserAreaFilterFilter>>;
  or?: Maybe<Array<UserAreaFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserAreaResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserFilterFilter = {
  and?: Maybe<Array<UserFilterFilter>>;
  or?: Maybe<Array<UserFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  email?: Maybe<StringFieldComparison>;
  username?: Maybe<StringFieldComparison>;
  verified?: Maybe<StringFieldComparison>;
  firstname?: Maybe<StringFieldComparison>;
  lastLogin?: Maybe<DateFieldComparison>;
  lastname?: Maybe<StringFieldComparison>;
  profile?: Maybe<GraphQlFilterFilterComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export enum UserGender {
  Male = 'MALE',
  Female = 'FEMALE',
  TransGender = 'TRANS_GENDER',
  NotSpecified = 'NOT_SPECIFIED'
}

export type UserPositionFilterFilter = {
  and?: Maybe<Array<UserPositionFilterFilter>>;
  or?: Maybe<Array<UserPositionFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  isActive?: Maybe<BooleanFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type UserPositionResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserResponse = {
  id: Scalars['ID'];
  email: Scalars['String'];
  username: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  firstname: Scalars['String'];
  lastname?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
  isActive?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  roles: Array<SolvedEntityResponse>;
  profile?: Maybe<ProfileResponse>;
  avatarFile?: Maybe<CloudFileResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum ValueTypes {
  CostLastPurchase = 'COST_LAST_PURCHASE',
  WeightedAverageCost = 'WEIGHTED_AVERAGE_COST',
  SalePrice = 'SALE_PRICE'
}


export type WarehouseFilterFilter = {
  and?: Maybe<Array<WarehouseFilterFilter>>;
  or?: Maybe<Array<WarehouseFilterFilter>>;
  id?: Maybe<StringFieldComparison>;
  name?: Maybe<StringFieldComparison>;
  location?: Maybe<StringFieldComparison>;
  code?: Maybe<StringFieldComparison>;
  description?: Maybe<StringFieldComparison>;
  createdAt?: Maybe<DateFieldComparison>;
  updatedAt?: Maybe<DateFieldComparison>;
};

export type WarehouseResponse = {
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  location: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  warehouseTypes: WarehouseTypes;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum WarehouseTypes {
  Billing = 'BILLING',
  Store = 'STORE'
}
