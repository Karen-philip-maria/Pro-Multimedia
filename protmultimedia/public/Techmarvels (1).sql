CREATE TABLE Cooperative (
    cooperative_id SMALLINT PRIMARY KEY,
    cooperative_name VARCHAR(20),
    cooperative_email VARCHAR(255),
    cooperative_phone_number VARCHAR(20)
);


CREATE TABLE Farmer (
    farmer_id SMALLINT PRIMARY KEY,
    farmer_first_name VARCHAR(20),
    farmer_last_name VARCHAR(20),
    farmer_email VARCHAR(255),
    farmer_phone_number VARCHAR(20),
    farmer_password VARCHAR(20) DEFAULT 'defaultpassword',
    farmer_loan_status VARCHAR(20),
    cooperative_id SMALLINT,
    FOREIGN KEY (cooperative_id) REFERENCES Cooperative(cooperative_id)
);


CREATE TABLE Saaco (
    saaco_name VARCHAR(20) PRIMARY KEY,
    saaco_email VARCHAR(255),
    saaco_phone_number VARCHAR(20),
    saaco_password VARCHAR(13) DEFAULT 'defaultpassword',
    farmer_id SMALLINT,
    cooperative_id SMALLINT,
    FOREIGN KEY (farmer_id) REFERENCES Farmer(farmer_id),
    FOREIGN KEY (cooperative_id) REFERENCES Cooperative(cooperative_id)
);

CREATE TABLE Loan (
    loan_id INT PRIMARY KEY,
    farmer_id INT,
    saaco_name VARCHAR(20),
    loan_amount DECIMAL(10,2),
    loan_interest_rate DECIMAL(5,2),
    loan_duration INT,
    loan_start_date DATE,
    loan_status VARCHAR(20),
    loan_repayment_amount DECIMAL(10,2),
    loan_repayment_date DATE,
    loan_repayment_status VARCHAR(20),
    FOREIGN KEY (farmer_id) REFERENCES Farmer(farmer_id),
    FOREIGN KEY (saaco_name) REFERENCES Saaco(saaco_name)
);

CREATE TABLE MilkRecords (
    milk_record_id INT PRIMARY KEY,
    farmer_id SMALLINT,
    cooperative_id SMALLINT,
    milk_date DATE,
    milk_quantity DECIMAL(5,2),
    milk_sale DECIMAL(5,2),
    milk_total DECIMAL(7,2),
    recorded_by SMALLINT,
    FOREIGN KEY (farmer_id) REFERENCES Farmer(farmer_id),
    FOREIGN KEY (cooperative_id) REFERENCES Cooperative(cooperative_id),
    FOREIGN KEY (recorded_by) REFERENCES Cooperative(cooperative_id)
);

CREATE TABLE Transactions (
    transaction_id INT PRIMARY KEY,
    farmer_id SMALLINT,
    cooperative_id SMALLINT,
    transaction_date DATE,
    transaction_type VARCHAR(20),
    transaction_amount DECIMAL(10,2),
    transaction_description TEXT,
    FOREIGN KEY (farmer_id) REFERENCES Farmer(farmer_id),
    FOREIGN KEY (cooperative_id) REFERENCES Cooperative(cooperative_id)
);
-- Insert Statements for sample data into the Cooperative table
INSERT INTO Cooperative (cooperative_id, cooperative_name, cooperative_email, cooperative_phone_number)
VALUES
    (1, 'Muguga Cooperative', 'info@mugugacooperative.com', '+254 0000007870'),
    (2, 'Limuru Cooperative', 'info@limurucooperative.com', '+256 7895555555');

-- Insert Statements for sample data into the Farmer table
INSERT INTO Farmer (farmer_id, farmer_first_name, farmer_last_name, farmer_email, farmer_phone_number, farmer_loan_status, cooperative_id)
VALUES
    (1, 'Bridget', 'Kathure', 'bridgetkathure@gmail.com', '+256 7895555555', 'active', 1),
    (2, 'Nancy', 'Nabacwa', 'nancynabacwa@gmail.com', '+1 (555) 9876543', 'inactive', 1),
    (3, 'Gloria', 'Nyaga', 'glorianyaga@gmail.com', '+256 7895555555', 'active', 2),
    (2, 'Karen', 'Maria', 'karenmaria@gmail.com', '++256 7895555555', 'active', 1),
    (3, 'Cheshari', 'Pearl', 'pearlcheshari@gmail.com', '+256 7895555555', 'inactive', 2);

-- Insert Statements for sample data into the Saaco table
INSERT INTO Saaco (saaco_name, saaco_email, saaco_phone_number, farmer_id, cooperative_id)
VALUES
    ('K-Unity', 'kunity@example.com', '+1 (555) 5555555', 1, 1),
    ('Githunguri', 'githunguri@example.com', '+1 (555) 1234567', 2, 1),
    ('Joiners', 'joiners@example.com', '+1 (555) 9876543', 3, 2);
